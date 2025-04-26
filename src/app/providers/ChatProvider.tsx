'use client';

import React, { createContext } from 'react';
import useSWR from 'swr';

interface ChatContextType {
  messages: Array<{ id: string; content: string; timestamp: string }>;
  sendMessage: (message: string) => Promise<void>;
  isLoading: boolean;
}

export const ChatContext = createContext<ChatContextType | undefined>(undefined);

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export function ChatProvider({ children }: { children: React.ReactNode }) {
  const { data: messages = [], mutate, isValidating } = useSWR('/api/messages', fetcher);

  const sendMessage = async (message: string) => {
    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message }),
      });

      const data = await response.json();
      
      // Update the messages using SWR's mutate
      await mutate([...messages, {
        id: Date.now().toString(),
        content: data.message,
        timestamp: data.timestamp,
      }], false);
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <ChatContext.Provider value={{ messages, sendMessage, isLoading: isValidating }}>
      {children}
    </ChatContext.Provider>
  );
} 