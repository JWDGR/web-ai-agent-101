'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useChat } from '../hooks/useChat';
import { Textarea } from '@/components/ui/textarea';

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
        {messages.map(message => (
          <Textarea key={message.id} value={message.content} readOnly />
        ))}
      </div>
      <form onSubmit={handleSubmit} className="flex gap-2">
        <Input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Type your message..."
          disabled={isLoading}
        />
        <Button disabled={isLoading} type="submit">
          {isLoading ? 'Sending...' : 'Send'}
        </Button>
      </form>
    </div>
  );
}
