import { AiOutlineHome, AiOutlineUser, AiOutlineCompass } from 'react-icons/ai';
import { MdOutlineLogout } from 'react-icons/md';
import { BsBookmarkPlus, BsPencilSquare } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';

function Sidebar() {
    return (
        <aside className="max-w-xs p-4 rounded h-screen fixed">
            <ul className="mt-12">
                <li className="p-4">
                    <NavLink to="/" className={`flex items-center`} >
                        <span className="inline"> <AiOutlineHome size={20} /> </span>
                        <span className="hidden xl:block ml-4 font-semibold">Home</span>
                    </NavLink>
                </li>
                <li className="p-4">
                    <NavLink to="/" className={`flex items-center`} >
                        <span className="inline-block"> <AiOutlineCompass size={20}/> </span>
                        <span className="hidden xl:block ml-4 font-semibold">Explore</span>
                    </NavLink>
                </li>
                <li className="p-4">
                    <NavLink to="/bookmark" className={`flex items-center`} >
                        <span className="inline-block"> <BsBookmarkPlus size={20} /> </span>
                        <span className="hidden xl:block ml-4 font-semibold">Bookmarks</span>
                    </NavLink>
                </li>
                <li className="p-4">
                    <NavLink to="/profile" className={`flex items-center`} >
                        <span className="inline-block"> <AiOutlineUser size={20} /> </span>
                        <span className="hidden xl:block ml-4 font-semibold">Profile</span>
                    </NavLink>
                </li>
                <li className="p-4">
                    <NavLink to="/" className={`flex items-center`} >
                        <span className="inline-block"> <MdOutlineLogout size={20} /> </span>
                        <span className="hidden xl:block ml-4 font-semibold">Logout</span>
                    </NavLink>
                </li>
                <li className="py-4">
                    <button className="hidden xl:block font-bold text-white bg-[#1DA1F2] px-4 py-2 rounded-lg w-36">Qweet</button>
                    <button className="xl:hidden font-bold text-white bg-[#1DA1F2] px-4 py-4 rounded-full"><BsPencilSquare /></button>
                </li>
            </ul>
        </aside>
    )
}

export default Sidebar