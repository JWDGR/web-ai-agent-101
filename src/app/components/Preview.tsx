import React from 'react';

interface PreviewProps {
  content?: string;
}

export default function Preview({ content }: PreviewProps) {
  return (
    <div className="w-full h-full bg-background rounded-lg shadow-md p-4">
      <h2 className="text-xl font-semibold mb-4 font-[family-name:var(--font-geist-sans)]">Preview</h2>
      <div className="min-h-[200px] border border-foreground/20 rounded p-4 font-[family-name:var(--font-geist-mono)]">
        {content || 'Preview content will appear here'}
      </div>
    </div>
  );
} 