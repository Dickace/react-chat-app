import React, { useEffect } from 'react'
import Text from '../../atoms/Text'
import './style.scss'
import FileIcon from '../../atoms/FileIcon'
export type MessageItem = {
  text: string
  files: Array<string>
  isFromMe: boolean
  userName?: string
}

export interface MessageProps {
  messageItem: MessageItem
}

const Message: React.FC<MessageProps> = ({
  messageItem = { text: 'Hey!', isFromMe: true, files: [] },
}) => {
  return (
    <>
      <div
        className={`messageBlock messageBlock__${
          messageItem.isFromMe ? 'fromMe' : 'fromChat'
        }`}
      >
        <Text text={messageItem.text} weight="400" />
        {messageItem.files.length !== 0
          ? messageItem.files.map((value, index) => {
              return <FileIcon key={`${value}${index}`} filepath={value} />
            })
          : null}
      </div>
    </>
  )
}
export default Message
