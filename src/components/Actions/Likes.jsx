import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import { UserCard } from "..";
import { ScrollArea } from "@/components/ui/scroll-area"

const Likes = () => {

  return (
    <Dialog>
        <div >
            <DialogTrigger asChild className="cursor-pointer">
                <small>168 likes</small>
            </DialogTrigger>
        </div>
      <DialogContent className="bg-primary border-customGray h-[80vh] p-[1px]">
        <DialogHeader className="p-[1.3rem] pb-0">
          <DialogTitle className="gradient text-[1.5rem]">Heartue</DialogTitle>
          <DialogDescription className="text-lightGray">This post garnered 35 hearts</DialogDescription>
        </DialogHeader>
        <ScrollArea className="h-full px-[2rem] py-[1rem]">
            <UserCard/>
            <UserCard/>
            <UserCard/>
            <UserCard/>
            <UserCard/>
            <UserCard/>
            <UserCard/>
            <UserCard/>
            <UserCard/>
            <UserCard/>
            <UserCard/>
            <UserCard/>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  )
}

export default Likes
