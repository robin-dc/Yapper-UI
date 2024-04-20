import { BsHeart, BsChat, BsHeartFill } from "react-icons/bs";
import { FiRepeat, FiSend } from "react-icons/fi";
import { TbRepeat, TbRepeatOff } from "react-icons/tb";
import { GoHome, GoHeart, GoSearch, GoPerson } from "react-icons/go";

const PostActions = () => {
  return (
    <div className="flex gap-[1rem] mt-[1rem]">
      <GoHeart className="text-[1.2rem]"/>
      <BsChat className="text-[1.1rem]"/>
      <FiRepeat className="text-[1.1rem]"/>
      <FiSend className="text-[1.1rem]"/>
    </div>
  )
}

export default PostActions
