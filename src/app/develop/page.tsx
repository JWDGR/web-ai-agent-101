import { ChatProvider } from '../providers/ChatProvider';
import { ResizableHandle } from '@/components/ui/resizable';
import { ResizablePanel } from '@/components/ui/resizable';
import { ResizablePanelGroup } from '@/components/ui/resizable';
import { Chat } from '../components/Chat';
import Preview from '../components/Preview';

export default function DevelopPage() {
  return (
    <ChatProvider>
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel defaultSize={40}>
          <Chat />
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize={60}>
          <Preview />
        </ResizablePanel>
      </ResizablePanelGroup>
    </ChatProvider>
  );
}
