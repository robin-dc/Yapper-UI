import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

import { MdArrowDropDown } from "react-icons/md";
import { Link } from "react-router-dom";

const Horizontal = () => {
  return (
    <header className="fixed left-0 right-0 top-0 bg-primary z-10">
        <nav className="h-[5rem] border-b-[1px] border-customGray flex justify-between p-[2rem] items-center">
            <h1 className="gradient font-semibold text-[2rem]">Yapper</h1>
                <DropdownMenu>
                  <DropdownMenuTrigger className=" border border-customBorder py-[10px] px-[0.5rem] rounded-md outline-none flex gap-[0.5rem] justify-between items-center">
                    <Avatar className="w-[1.5rem] h-[1.5rem]">
                      <AvatarImage src="https://robin-dc.github.io/Facebook-UI-Clone/images/robin.png" />
                      <AvatarFallback>YP</AvatarFallback>
                    </Avatar>
                    <h3 className="text-[0.85rem]">Robin Dela Cruz</h3>
                    <MdArrowDropDown />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-primary border-customBorder mt-2 w-[200px]">
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator className="bg-customBorder"/>
                    <DropdownMenuItem><Link to="/me">Profile</Link></DropdownMenuItem>
                    <DropdownMenuItem>Settings</DropdownMenuItem>
                    <DropdownMenuItem>Help</DropdownMenuItem>
                    <DropdownMenuSeparator className="bg-customBorder"/>
                    <DropdownMenuItem>Github</DropdownMenuItem>
                    <DropdownMenuItem>Donate</DropdownMenuItem>
                    <DropdownMenuItem>About App</DropdownMenuItem>
                    <DropdownMenuSeparator className="bg-customBorder"/>
                    <Link to="/login">
                      <DropdownMenuItem>
                        Logout
                      </DropdownMenuItem>
                    </Link>
                  </DropdownMenuContent>
                </DropdownMenu>
        </nav>
    </header>
  )
}

export default Horizontal
