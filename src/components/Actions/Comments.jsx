import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { BsHeart, BsChat, BsHeartFill } from "react-icons/bs";
import { UserCard } from "..";
import { ScrollArea } from "@/components/ui/scroll-area"

const Comments = ({children}) => {

  return (
    <Dialog>
        <div >
            <DialogTrigger asChild className="cursor-pointer">
                {children}
            </DialogTrigger>
        </div>
      <DialogContent className="bg-primary border-customGray h-[80vh] p-[1px]">
        <DialogHeader className="p-[1.3rem] pb-0">
          <DialogTitle className="gradient text-[1.5rem]">Chika</DialogTitle>
          <DialogDescription className="text-lightGray">This post garnered 35 replies</DialogDescription>
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

export default Comments
