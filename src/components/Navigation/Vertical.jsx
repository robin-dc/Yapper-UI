import { GoHome, GoHeart, GoSearch, GoPerson } from "react-icons/go";
import { NavLink } from "react-router-dom";
import { Activity, Search } from "..";

const Vertical = () => {
  return (
    <nav className="w-full py-[2rem] px-[1rem]">
        <ul className="w-full flex flex-col gap-[3px]">
            <li>
                <NavLink to="/" className="flex items-center gap-[1rem] p-[1rem] rounded-md hover:bg-customGray" style={({ isActive, isPending }) => {
                        return {
                            backgroundColor: isActive ? "#282828" : "",
                        };
                    }}>
                    <GoHome className="text-[1.2rem]"/>
                    <span>Home</span>
                </NavLink>
            </li>
            <li>
                <NavLink>
                    <Search/>
                </NavLink>
            </li>
            <li>
                <NavLink>

                    <Activity/>
                </NavLink>
            </li>

            <li>
                <NavLink to="/me" className="flex items-center gap-[1rem] w-full p-[1rem] rounded-md hover:bg-customGray" style={({ isActive}) => {
                    return {
                        backgroundColor: isActive ? "#282828" : "",
                    };
                }}>
                    <GoPerson className="text-[1.2rem]"/>
                    <span>Profile</span>
                </NavLink>
            </li>

        </ul>
    </nav>

  )
}

export default Vertical
