import { ChatProvider } from '../providers/ChatProvider';
import { Chat } from '../components/Chat';
import Preview from '../components/Preview';

export default function DevelopPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-2xl font-bold mb-8 font-[family-name:var(--font-geist-sans)]">Develop</h1>
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-6 h-[calc(100vh-8rem)]">
        <ChatProvider>
          <Chat />
        </ChatProvider>
        <Preview />
      </div>
    </div>
  );
} 