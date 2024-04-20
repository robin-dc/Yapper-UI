import { GoHome, GoHeart, GoSearch, GoPerson } from "react-icons/go";
import { NavLink } from "react-router-dom";

const Vertical = () => {
  return (
    <nav className="w-full py-[2rem] px-[1rem]">
        <ul className="w-full">
            <NavLink to="/">
                <li className="flex items-center gap-[1rem] p-[1rem] rounded-md hover:bg-customGray">
                    <GoHome className="text-[1.2rem]"/>
                    <span>Home</span>
                </li>
            </NavLink>
            <NavLink to="/activity">
                <li className="flex items-center gap-[1rem] p-[1rem] rounded-md hover:bg-customGray">
                    <GoHeart className="text-[1.2rem]"/>
                    <span>Activity</span>
                </li>
            </NavLink>
            <NavLink to="/search">
                <li className="flex items-center gap-[1rem] p-[1rem] rounded-md hover:bg-customGray">
                    <GoSearch className="text-[1.2rem]"/>
                    <span>Search</span>
                </li>
            </NavLink>
            <NavLink to="/user/dadsasndk">
                <li className="flex items-center gap-[1rem] p-[1rem] rounded-md hover:bg-customGray">
                    <GoPerson className="text-[1.2rem]"/>
                    <span>Profile</span>
                </li>
            </NavLink>
        </ul>
    </nav>

  )
}

export default Vertical
