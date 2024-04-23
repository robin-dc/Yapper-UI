import { IoCalendarOutline, IoPersonAddOutline } from "react-icons/io5";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"

const ProfileTooltip = ({children}) => {
  return (
    <HoverCard>
      <HoverCardTrigger asChild className="p-0">
        <Button variant="link">
            {children}
        </Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80 bg-primary border-customGray relative" side="bottom">
        <div className="flex gap-[0.5rem] space-x-4">
          <Avatar>
            <AvatarImage src="https://i.pinimg.com/originals/42/36/57/4236575a78f9e6fa55a1f94f83af578b.jpg" />
            <AvatarFallback>VC</AvatarFallback>
          </Avatar>
          <div>
            <h4 className="text-sm font-semibold gradient">@rrra_wrrr</h4>
            <div className="flex gap-[1rem]">
                <small>1 followers</small>
                <small>14 following</small>
            </div>
            <p className="text-sm ">on my backend era</p>
            <div className="flex items-center pt-[1rem] gap-[7px]">
                <IoCalendarOutline />
                <span className="text-xs text-lightGray">
                Joined December 2021
                </span>
            </div>
          </div>
        </div>
        <IoPersonAddOutline className="cursor-pointer absolute top-[1rem] right-[1rem]"/>
      </HoverCardContent>
    </HoverCard>
  )
}

export default ProfileTooltip
