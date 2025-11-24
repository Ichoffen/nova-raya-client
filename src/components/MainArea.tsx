import React from "react";
import type { Chat } from "../App";
import { MessageList } from "./MessageList";
import { MessageInput } from "./MessageInput";

interface MainAreaProps {
  chat: Chat;
  onSend: (text: string) => void;
}

export const MainArea: React.FC<MainAreaProps> = ({ chat, onSend }) => {
  return (
    <main className="main">
      <header className="main-header">
        <div className="main-header-left">
          <div className="main-avatar">N</div>
          <div className="main-header-text">
            <span className="main-header-title">{chat.title}</span>
            <span className="main-header-subtitle">
              Nova-Raya-Client • Electron
            </span>
          </div>
        </div>
        <div className="main-header-right">
          <button
            type="button"
            className="settings-btn"
            onClick={() => {
              alert("Здесь потом сделаем нормальные настройки и ввод API-ключа.");
            }}
          >
            Settings
          </button>
          <span className="api-status">API key: not set</span>
        </div>
      </header>
      <MessageList messages={chat.messages} />
      <MessageInput onSend={onSend} />
    </main>
  );
};
