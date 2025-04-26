import { ChatProvider } from '../providers/ChatProvider';
import { ResizableHandle } from '@/components/ui/resizable';
import { ResizablePanel } from '@/components/ui/resizable';
import { ResizablePanelGroup } from '@/components/ui/resizable';
import { Chat } from '../components/Chat';
import Preview from '../components/Preview';

export default function DevelopPage() {
  return (
    <ResizablePanelGroup direction="horizontal">
      <ResizablePanel>
        <ChatProvider>
          <Chat />
        </ChatProvider>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel>
        <Preview />
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}
