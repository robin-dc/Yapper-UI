"use client"

import { Button } from "@/components/ui/button"

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

import { GoHeart } from "react-icons/go";
import { NotificationCard } from ".."

import { FaCheck } from "react-icons/fa6";
import { ScrollArea } from "@/components/ui/scroll-area"

const Activity = () => {
  return (
    <Sheet>
        <SheetTrigger asChild className="flex items-center gap-[1rem] p-[1rem] rounded-md hover:bg-customGray">
            <Button className="w-full flex justify-start">
                <GoHeart className="text-[1.2rem]"/>
                <span>Activity</span>
            </Button>
        </SheetTrigger>

        <SheetContent side="left"  className="bg-primary border-customGray flex flex-col">
            <SheetHeader>
                <SheetTitle className="text-white gradient text-[1.3rem]">Notifications</SheetTitle>
                <SheetDescription className="text-lightGray">
                    You have 3 unread notifications.
                </SheetDescription>
            </SheetHeader>

            <ScrollArea className="w-full">
                <div className="py-[1rem] w-full h-full">
                    <NotificationCard/>
                    <NotificationCard/>
                    <NotificationCard/>
                    <NotificationCard/>
                    <NotificationCard/>
                    <NotificationCard/>
                    <NotificationCard/>
                    <NotificationCard/>
                    <NotificationCard/>
                    <NotificationCard/>
                </div>
            </ScrollArea>
            <SheetFooter className="w-full bg-primary z-10">
                <Button className="w-full bg-white flex gap-[5px] opacity-100 hover:bg-customGray hover:text-white">
                    <FaCheck className="text-primary"/>
                    <span>Mark all as read</span>
                </Button>
            </SheetFooter>
        </SheetContent>
    </Sheet>
  )
}

export default Activity
