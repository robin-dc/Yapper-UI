"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

import { GoSearch } from "react-icons/go";
import { UserCard } from ".."

const Search = () => {
  return (
    <Sheet>
        <SheetTrigger asChild className="py-[1.7rem] hover:bg-customGray">
            <Button className="w-full flex justify-start gap-[1rem]">
                <GoSearch className="text-[1.2rem]"/>
                <span>Search</span>
            </Button>
        </SheetTrigger>

        <SheetContent side="left"  className="bg-primary border-customGray p-[1.3rem]">
        <SheetHeader>
            <SheetTitle className="text-white mb-[1rem] gradient text-[1.3rem]">Search</SheetTitle>
            {/* <SheetDescription>
            Make changes to your profile here. Click save when you're done.
            </SheetDescription> */}
        </SheetHeader>
        <div className="flex gap-[1rem] py-[1rem] border-b-[1px] border-customGray">
            <Input id="name" value="Find a yapper" className="bg-customGray border-none selection:bg-transparent" />
        </div>
        <SheetFooter>
            <div className="w-full p-[1rem]">
                <div className="flex justify-between">
                    <small className="text-white">Recent</small>
                    <button className="gradient"><small>Clear all</small></button>
                </div>
                <div className="mt-[1rem]">
                    <UserCard/>
                    <UserCard/>
                    <UserCard/>
                    <UserCard/>
                </div>
            </div>
        </SheetFooter>
        </SheetContent>
    </Sheet>
  )
}

export default Search
