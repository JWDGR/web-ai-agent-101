'use client';

import React, { useContext } from 'react';
import { ChatContext } from '../providers/ChatProvider';

export default function Preview() {
  const chatContext = useContext(ChatContext);
  const lastMessage = chatContext?.messages[chatContext.messages.length - 1];

  return (
    <div className="w-full h-full bg-background rounded-lg shadow-md p-4">
      <h2 className="text-xl font-semibold mb-4 font-[family-name:var(--font-geist-sans)]">
        Preview
      </h2>
      <div className="min-h-[200px] border border-foreground/20 rounded p-4 font-[family-name:var(--font-geist-mono)]">
        {lastMessage ? (
          <iframe
            srcDoc={lastMessage.content}
            className="w-full h-full min-h-[200px] border-0"
            sandbox="allow-scripts"
            title="Message Preview"
          />
        ) : (
          'Preview content will appear here'
        )}
      </div>
    </div>
  );
}
