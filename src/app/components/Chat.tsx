'use client';

import React, { useState } from 'react';
import { useChat } from '../hooks/useChat';

export function Chat() {
  const [input, setInput] = useState('');
  const { messages, sendMessage, isLoading } = useChat();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      await sendMessage(input);
      setInput('');
    }
  };

  return (
    <div className="flex flex-col h-[600px] w-full max-w-2xl mx-auto p-4">
      <div className="flex-1 overflow-y-auto mb-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className="p-4 rounded-lg bg-gray-100 dark:bg-gray-800"
          >
            <div dangerouslySetInnerHTML={{ __html: message.content }} />
            <div className="text-xs text-gray-500 mt-2">
              {new Date(message.timestamp).toLocaleTimeString()}
            </div>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          className="flex-1 p-2 border rounded-lg dark:bg-gray-800 dark:border-gray-700"
          disabled={isLoading}
        />
        <button
          type="submit"
          disabled={isLoading}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50"
        >
          {isLoading ? 'Sending...' : 'Send'}
        </button>
      </form>
    </div>
  );
} 