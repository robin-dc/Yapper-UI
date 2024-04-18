import { Horizontal } from "@/components"
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"
import { Link } from "react-router-dom"

const Feed = () => {
  return (
    <div>
      <Horizontal/>
      <ResizablePanelGroup direction="horizontal" className="flex">
        <ResizablePanel className="h-screen max-w-[250px] flex justify-center p-[2rem]">
          <ul>
            <li><Link>Home</Link></li>
            <li><Link>Activity</Link></li>
            <li><Link>Search</Link></li>
            <li><Link>Profile</Link></li>
          </ul>
        </ResizablePanel>

        <ResizableHandle className="bg-black"/>
        <ResizablePanel className="flex-2">

        </ResizablePanel>

        <ResizableHandle className="bg-black"/>
        <ResizablePanel className="h-screen max-w-[250px] flex justify-center p-[2rem]">

        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  )
}

export default Feed
