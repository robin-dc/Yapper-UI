import { Advertisement, FriendsList, Horizontal, Patch, PostCard, PostForm, Vertical } from "@/components"
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"
import { ScrollArea } from "@/components/ui/scroll-area"

const Feed = () => {
  return (
    <div>
      <Horizontal/>
      <ResizablePanelGroup direction="horizontal" className="flex">
        <ResizablePanel  defaultSize={17} className="max-w-[300px] min-w-[180px] h-screen flex justify-center pt-[5rem]">
          <Vertical/>
        </ResizablePanel>

        <ResizableHandle className="bg-customGray"/>
        <ResizablePanel defaultSize={60} className="min-w-[500px] h-screen">
          <div className="pt-[5rem] h-full">
            <ScrollArea className="h-full w-full rounded-md p-[2rem]">
              <Patch/>
              <PostForm/>
              <PostCard/>
              <PostCard/>
              <PostCard/>
              <PostCard/>
              <PostCard/>
              <PostCard/>
              <PostCard/>
              <PostCard/>
            </ScrollArea>
          </div>
        </ResizablePanel>

        <ResizableHandle className="bg-customGray"/>
        <ResizablePanel defaultSize={23} className="min-w-[300px] h-screen flex justify-center">
          <div className="pt-[5rem] h-full w-full">
          <ScrollArea className="h-full w-full rounded-md">
            <div className="flex flex-col gap-[1rem] py-[2rem] px-[1rem]">
              <Advertisement/>
              <FriendsList/>
            </div>

          </ScrollArea>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  )
}

export default Feed
