import React from 'react';

interface ChatProps {
  messages?: Array<{ role: 'user' | 'assistant'; content: string }>;
}

export default function Chat({ messages = [] }: ChatProps) {
  return (
    <div className="w-full h-full bg-background rounded-lg shadow-md p-4">
      <h2 className="text-xl font-semibold mb-4 font-[family-name:var(--font-geist-sans)]">Chat</h2>
      <div className="min-h-[200px] border border-foreground/20 rounded p-4 mb-4">
        {messages.length === 0 ? (
          <p className="text-foreground/60">No messages yet</p>
        ) : (
          messages.map((message, index) => (
            <div key={index} className={`mb-2 ${message.role === 'user' ? 'text-right' : 'text-left'}`}>
              <span className={`inline-block p-2 rounded ${
                message.role === 'user' ? 'bg-foreground/10' : 'bg-foreground/5'
              }`}>
                {message.content}
              </span>
            </div>
          ))
        )}
      </div>
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Type your message..."
          className="flex-1 p-2 border border-foreground/20 rounded bg-background text-foreground font-[family-name:var(--font-geist-sans)]"
        />
        <button className="px-4 py-2 bg-foreground text-background rounded hover:bg-foreground/90 font-[family-name:var(--font-geist-sans)]">
          Send
        </button>
      </div>
    </div>
  );
} 