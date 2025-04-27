'use client';

import React, { useContext } from 'react';
import { ChatContext } from '../providers/ChatProvider';

export default function Preview() {
  const chatContext = useContext(ChatContext);
  const lastMessage = chatContext?.messages[chatContext.messages.length - 1];

  return (
    <div className="w-full h-full bg-background rounded-lg shadow-md p-4 flex flex-col">
      <h2 className="text-xl font-semibold mb-4">Preview</h2>
      <div className="border border-foreground/20 rounded p-4 flex-1">
        {lastMessage ? (
          <iframe
            srcDoc={lastMessage.content}
            className="w-full h-full border-0"
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
