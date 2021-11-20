import React, {
  ChangeEvent,
  ChangeEventHandler,
  createRef,
  EventHandler,
  FormEvent,
  FormEventHandler,
  useEffect,
  useState,
} from 'react'
import SendIcon from '../../../assets/img/sendMessage.svg'
import PinIcon from '../../../assets/img/pinFile.svg'
import './style.scss'
import URLS from '../../../ApiUrl.json'
import {
  AJAX,
  catchFileNameFromPath,
  isAllowedDataFile,
} from '../../../assets/additionalFuntions'
import { useStore } from 'effector-react'
import { $WebsocketStore } from '../../../store/websocketStore'
import { useParams } from 'react-router-dom'
import { $MyProfileDataStore } from '../../../store/myProfileDataStore'
import FileIcon from '../../atoms/FileIcon'

const ChatInput: React.FC = () => {
  const [progress, setProgress] = useState<number>()
  const [isLoaded, setIsLoaded] = useState<boolean>(true)
  const [inputMessage, setInputMessage] = useState<string>('')
  const [fileError, setFileError] = useState<string>('')
  const [filesUrls, setFilesUrls] = useState<Array<string>>([])
  const handleMessageChange = (event: React.FormEvent<HTMLInputElement>) => {
    setInputMessage(event.currentTarget.value)
  }
  const { username } = useParams<{ username?: string }>()
  const myProfileDataStore = useStore($MyProfileDataStore)
  const websocketStore = useStore($WebsocketStore)
  const handleSendMessage = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if ((inputMessage.length > 0 || filesUrls.length > 0) && isLoaded) {
      const message = {
        type: 'chats',
        data: {
          text: inputMessage,
          files: filesUrls,
          usersender: myProfileDataStore.name,
          userreciver: username,
        },
      }
      websocketStore.websocket?.send(`"${JSON.stringify(message)}"`)
      setFilesUrls([])
      setInputMessage('')
    }
  }
  const handleFilesChange = (event: ChangeEvent<HTMLInputElement>) => {
    setIsLoaded(false)
    setFileError('')
    const file = event.currentTarget.files
    if (file?.[0]) {
      if (file[0].size > 2097152) {
        setFileError('Max size of file 2MB')
        return
      }
      if (!isAllowedDataFile(file[0].type)) {
        setFileError('Not allowed type of data')
        return
      }

      const reqParams = {
        files: file,
      }
      AJAX({
        url: `${URLS.API_URL}/api/upload`,
        method: 'POST',
        data: reqParams,
        events: {
          success: (responseText, xhr) => {
            setIsLoaded(true)
            setFilesUrls([...filesUrls, `${URLS.API_URL}/${responseText}`])
          },
          error: (responseText, xhr) => {
            setFileError(responseText)
          },
          progress: (event) => {
            setProgress(event?.loaded / event?.total)
          },
        },
      })
    }
  }

  return (
    <>
      {filesUrls.length > 0 ? (
        <div className="previewFile">
          {filesUrls.map((value) => {
            return (
              <div key={value}>
                <FileIcon filepath={value} />
              </div>
            )
          })}
        </div>
      ) : null}

      <form className="chatInput" onSubmit={handleSendMessage}>
        <label>
          <p className="chatInput-fileError">{fileError}</p>
          <img src={PinIcon} alt={catchFileNameFromPath(PinIcon)} />
          <input
            className="chatInput-file"
            type="file"
            onChange={handleFilesChange}
          />
        </label>
        <input
          className="chatInput-file"
          name="files"
          value={filesUrls}
          readOnly
        />
        <input
          className="chatInput-messageInput"
          placeholder="Write something..."
          value={inputMessage}
          onChange={handleMessageChange}
        />
        <label>
          <img src={SendIcon} alt={catchFileNameFromPath(SendIcon)} />
          <input className="chatInput-submit" type="submit" />
        </label>
      </form>
    </>
  )
}
export default ChatInput
