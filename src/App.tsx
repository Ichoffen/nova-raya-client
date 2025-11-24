import React, { useState } from "react";
import { Sidebar } from "./components/Sidebar";
import { MainArea } from "./components/MainArea";

export type Role = "user" | "assistant";

export interface Message {
  id: string;
  role: Role;
  text: string;
  timestamp: string;
}

export interface Chat {
  id: string;
  title: string;
  messages: Message[];
}

const initialChats: Chat[] = [
  {
    id: "1",
    title: "Онбординг клиента Nova",
    messages: [
      {
        id: "m1",
        role: "user",
        text: "Привет, Рая. Давай строить Nova-Raya-Client.",
        timestamp: "19:03",
      },
      {
        id: "m2",
        role: "assistant",
        text: "Привет! Я с тобой. Этот клиент будем делать красивым и понятным.",
        timestamp: "19:04",
      },
    ],
  },
  {
    id: "2",
    title: "Идеи по промптам",
    messages: [],
  },
];

export default function App() {
  const [chats, setChats] = useState<Chat[]>(initialChats);
  const [activeChatId, setActiveChatId] = useState<string>(initialChats[0].id);

  const activeChat = chats.find((c) => c.id === activeChatId)!;

  const handleSend = (text: string) => {
    const trimmed = text.trim();
    if (!trimmed) return;

    const now = new Date();
    const timestamp = now.toTimeString().slice(0, 5);

    const userMsg: Message = {
      id: crypto.randomUUID(),
      role: "user",
      text: trimmed,
      timestamp,
    };

    const assistantMsg: Message = {
      id: crypto.randomUUID(),
      role: "assistant",
      text:
        "Я получила твоё сообщение. Сейчас это заглушка. Позже здесь будет реальный ответ Claude через API.",
      timestamp,
    };

    setChats((prev) =>
      prev.map((chat) =>
        chat.id === activeChatId
          ? { ...chat, messages: [...chat.messages, userMsg, assistantMsg] }
          : chat
      )
    );
  };

  return (
    <div className="app-root">
      <Sidebar
        chats={chats}
        activeChatId={activeChatId}
        onSelectChat={setActiveChatId}
      />
      <MainArea chat={activeChat} onSend={handleSend} />
    </div>
  );
}
