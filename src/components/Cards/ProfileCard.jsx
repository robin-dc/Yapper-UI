import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { IoPersonAddOutline } from "react-icons/io5";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "../ui/button";

const ProfileCard = ({user}) => {

  return (
    <Card className="bg-primary flex flex-col border-none">
      <CardHeader className="p-0 m-0 w-full">
        <div className="flex items-center gap-[1rem] w-full justify-between">
          <div>
            <CardTitle className="text-[1.7rem] text-white">{user?.firstName} {user?.lastName}</CardTitle>
            <CardDescription className="text-lightGray">
              <p className="inline">@{user?.userName}</p>
              <small className="px-[8px] py-[5px] bg-customGray rounded-full ml-[5px]">yapper.net</small>
            </CardDescription>
          </div>
          <Avatar className="w-[5rem] h-[5rem]">
              <AvatarImage
              src="https://i.pinimg.com/originals/42/36/57/4236575a78f9e6fa55a1f94f83af578b.jpg" className="z-10 rounded-full border-[3px] border-customBorder"/>
              <AvatarFallback>YP</AvatarFallback>
          </Avatar>
        </div>
      </CardHeader>
      <CardContent className="p-0 py-[1rem]">
        <p className="text-white mb-[1rem]">on my backend era</p>
        <div className="flex gap-[1rem]">
          <small>1 followers</small>
          <small>14 following</small>
        </div>
      </CardContent>
      <CardFooter className="flex gap-[1rem] px-0">
        <Button className="w-full border border-lightGray hover:bg-customGray hover:border-customGray">Edit Profile</Button>
        <Button className="w-full border border-lightGray hover:bg-customGray hover:border-customGray">Share Profile</Button>
      </CardFooter>
    </Card>
  )
}

export default ProfileCard
