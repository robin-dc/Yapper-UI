import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { BsThreeDots } from "react-icons/bs";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { PostActions } from "..";

const PostCard = () => {
  return (
    <Card className="bg-primary border-b-0 border-l-0 border-r-0 rounded-none border-t-customGray p-[1rem] h-fit">
      <AlertDialog>
      <div className="flex gap-[1rem] h-full">

        <div className="flex flex-col items-center gap-[1rem] pb-[1rem]">
          <Avatar>
              <AvatarImage src="https://i.pinimg.com/originals/42/36/57/4236575a78f9e6fa55a1f94f83af578b.jpg" />
              <AvatarFallback>YP</AvatarFallback>
          </Avatar>
          <span className="w-[2px] h-[100%] bg-customGray"></span>
        </div>

        <div className="w-full">
          <CardHeader className="p-0">
              <div className="w-full">
                <div className="flex justify-between">
                  <div className="flex gap-2 items-center">
                    <CardTitle className="text-[1rem] text-white p-0">hanni my love so sweet</CardTitle>
                    <small className="text-lightGray">19h</small>
                  </div>
                  <DropdownMenu>
                    <DropdownMenuTrigger className="outline-none rounded-full">
                      <BsThreeDots/>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="bg-customGray border-none">
                      <DropdownMenuItem>Edit</DropdownMenuItem>
                      <DropdownMenuSeparator className="bg-customBorder"/>
                      <DropdownMenuItem>Hide</DropdownMenuItem>
                      <DropdownMenuSeparator className="bg-customBorder"/>
                      <DropdownMenuItem>
                          <AlertDialogTrigger className="border-none">Yeet</AlertDialogTrigger>
                      </DropdownMenuItem>
                      <DropdownMenuSeparator className="bg-customBorder"/>
                      <DropdownMenuItem>Report</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>

                <CardDescription className="text-lightGray">aasdssssssssasdadasd</CardDescription>
              </div>
          </CardHeader>

          <CardContent className="p-0 py-[1rem]">
            <img src="/auth_bg.png" alt="" />
            <PostActions/>
          </CardContent>
        </div>
      </div>

      <CardFooter className="p-0 flex px-[1rem] gap-[1.5rem]">
        <Avatar className="w-[1rem] h-[1rem]">
            <AvatarImage src="https://i.pinimg.com/originals/42/36/57/4236575a78f9e6fa55a1f94f83af578b.jpg" />
            <AvatarFallback>YP</AvatarFallback>
        </Avatar>
        <div className="flex gap-[10px] items-center">
          <small>1 reply</small>
          <span className="text-[0.5rem]">&#8226;</span>
          <small>168 likes</small>
        </div>
      </CardFooter>

      <AlertDialogContent className="bg-primary border-customGray">
        <AlertDialogHeader>
          <AlertDialogTitle className="gradient">Are you absolutely sure to yeet this?</AlertDialogTitle>
          <AlertDialogDescription className="text-lightGray">
            This action cannot be undone. This will permanently delete your post data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel lassName="bg-white text-primary hover:bg-customGray hover:text-white border-none">Cancel</AlertDialogCancel>
          <AlertDialogAction className="border-2 border-customGray">Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
      </AlertDialog>
    </Card>
  )
}

export default PostCard
