import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { IoPersonAddOutline } from "react-icons/io5";

const PersonCard = () => {
  return (
    <div className="flex justify-between items-center border-t-[1px] border-customGray py-[0.7rem]">
        <div className="flex items-center gap-[1rem]">
            <Avatar className="w-[2rem] h-[2rem] relative before:content-[''] before:w-[10px] before:h-[10px] before:bg-green-600 before:absolute before:bottom-[-1px] before:right-[-1px] before:z-[1000] before:rounded-full before:border before:border-primary overflow-visible">
                <AvatarImage
                src="https://i.pinimg.com/originals/42/36/57/4236575a78f9e6fa55a1f94f83af578b.jpg" className="z-10 rounded-full"/>
                <AvatarFallback>YP</AvatarFallback>
            </Avatar>
            <span>Hanni Pham</span>
        </div>
        <IoPersonAddOutline className="cursor-pointer"/>
    </div>
  )
}

export default PersonCard
