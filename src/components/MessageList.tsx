import React from "react";
import type { Message } from "../App";

interface MessageListProps {
  messages: Message[];
}

export const MessageList: React.FC<MessageListProps> = ({ messages }) => {
  if (!messages.length) {
    return (
      <div className="messages-container">
        <div className="messages-empty">
          Здесь будут сообщения. Напиши что-нибудь в поле ниже 👇
        </div>
      </div>
    );
  }

  return (
    <div className="messages-container">
      {messages.map((msg) => (
        <div
          key={msg.id}
          className={
            "message-row" +
            (msg.role === "user" ? " message-row--user" : "")
          }
        >
          <div
            className={
              "message-bubble" +
              (msg.role === "user"
                ? " message-bubble--user"
                : " message-bubble--assistant")
            }
          >
            <div>{msg.text}</div>
            <div className="message-meta">
              {msg.role === "user" ? "Ты" : "Рая (заглушка)"} • {msg.timestamp}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
