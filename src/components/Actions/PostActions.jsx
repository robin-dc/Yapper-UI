import { BsHeart, BsChat, BsHeartFill } from "react-icons/bs";
import { FiRepeat, FiSend } from "react-icons/fi";
import { TbRepeat, TbRepeatOff } from "react-icons/tb";
import { Comments, Likes } from "..";
import { GoHome, GoHeart, GoSearch, GoPerson } from "react-icons/go";

const PostActions = () => {
  return (
    <div className="flex gap-[1rem] mt-[1rem]">
      <GoHeart className="text-[1.1rem]"/>
      <Comments>
        <BsChat className="text-[1.1rem]"/>
      </Comments>
      <FiRepeat className="text-[1.1rem]"/>
      <FiSend className="text-[1.1rem]"/>
    </div>
  )
}

export default PostActions
