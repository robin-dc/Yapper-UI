import { Horizontal, ProfileTabs, ProfileCard, Vertical } from "@/components"
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"
import { ScrollArea } from "@/components/ui/scroll-area"
import { useEffect, useState } from "react"


import Api from "@/common/api"

const Me = () => {
  const [currentUser, setCurrentUser] = useState("")

  const getMe = async () => {
    const response = await Api.getMe()
    console.log(response)
    setCurrentUser(response)
  }
  useEffect(() => {
    getMe()
  }, [])

  return (
    <div>
      <Horizontal/>
      <ResizablePanelGroup direction="horizontal" className="flex">
        <ResizablePanel  defaultSize={17} className="max-w-[300px] min-w-[180px] h-screen flex justify-center pt-[5rem]">
          <Vertical/>
        </ResizablePanel>

        <ResizableHandle className="bg-customGray"/>
        <ResizablePanel defaultSize={83} className="min-w-[500px] h-screen">
          <div className="pt-[5rem] h-full">
            <ScrollArea className="h-full w-full rounded-md py-[2rem] px-[13rem]">
              <ProfileCard user={currentUser}/>
              <ProfileTabs/>
            </ScrollArea>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  )
}

export default Me
