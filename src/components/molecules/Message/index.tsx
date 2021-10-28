import React from 'react'
import Text from '../../atoms/Text'
import './style.scss'

export type MessageItem = {
  text: string
  files?: string
  fromMe: boolean
}

export interface MessageProps {
  messageItem: MessageItem
}

const Message: React.FC<MessageProps> = ({
  messageItem = { text: 'Hey!', fromMe: true },
}) => {
  return (
    <>
      <div
        className={`messageBlock messageBlock__${
          messageItem.fromMe ? 'fromMe' : 'fromChat'
        }`}
      >
        <Text text={messageItem.text} weight={'400'} />
      </div>
    </>
  )
}
export default Message
