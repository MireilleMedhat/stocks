import React from 'react';
import './Message.css';

type MessageProps = {
  messageText: string;
};

const Message = ({ messageText }: MessageProps) => {
  return <div className="message">{messageText}</div>;
};

export default Message;
