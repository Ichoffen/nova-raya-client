import React from "react";
import type { Chat } from "../App";

interface SidebarProps {
  chats: Chat[];
  activeChatId: string;
  onSelectChat: (id: string) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  chats,
  activeChatId,
  onSelectChat,
}) => {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <div className="sidebar-title">Nova</div>
        <div className="sidebar-subtitle">Raya Client (Electron)</div>
      </div>
      <div className="sidebar-actions">
        <span>Чаты</span>
        <button
          type="button"
          className="sidebar-btn"
          onClick={() => {
            // пока просто заглушка
            alert("Добавление нового чата сделаем позже 🩵");
          }}
        >
          + New chat
        </button>
      </div>
      <div className="chat-list">
        {chats.map((chat) => (
          <button
            key={chat.id}
            type="button"
            className={
              "chat-list-item" +
              (chat.id === activeChatId ? " chat-list-item--active" : "")
            }
            onClick={() => onSelectChat(chat.id)}
          >
            <div className="chat-list-title">{chat.title}</div>
            <div className="chat-list-meta">
              {chat.messages.length
                ? chat.messages.length + " сообщений"
                : "Пока пусто"}
            </div>
          </button>
        ))}
      </div>
    </aside>
  );
};
