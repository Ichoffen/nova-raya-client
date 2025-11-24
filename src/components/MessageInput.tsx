import React, { useState } from "react";

interface MessageInputProps {
  onSend: (text: string) => void;
}

export const MessageInput: React.FC<MessageInputProps> = ({ onSend }) => {
  const [value, setValue] = useState("");

  const handleSend = () => {
    if (!value.trim()) return;
    onSend(value);
    setValue("");
  };

  const handleKeyDown: React.KeyboardEventHandler<HTMLTextAreaElement> = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="input-wrapper">
      <div className="input-inner">
        <textarea
          className="input-textarea"
          placeholder="Напиши сообщение Клоду…"
          rows={2}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button
          type="button"
          className="send-btn"
          onClick={handleSend}
          disabled={!value.trim()}
        >
          Send
        </button>
      </div>
      <div className="input-hint">
        Enter — отправить • Shift+Enter — перенос строки
      </div>
    </div>
  );
};
