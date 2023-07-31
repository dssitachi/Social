import { AiOutlineHome, AiOutlineUser, AiOutlineCompass } from 'react-icons/ai';
import { MdOutlineLogout } from 'react-icons/md';
import { BsBookmarkPlus, BsPencilSquare } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { handleLogout } from "../pages/authSlice";

function Sidebar() {
    const dispatch = useDispatch();
    const { user } = useSelector(state => state.auth);
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
                        <span className="inline-block"> <AiOutlineCompass size={20} /> </span>
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
                <li className="p-4" onClick={() => { dispatch(handleLogout()) }}>
                    <NavLink to="/login" className={`flex items-center`} >
                        <span className="inline-block"> <MdOutlineLogout size={20} /> </span>
                        <span className="hidden xl:block ml-4 font-semibold">Logout</span>
                    </NavLink>
                </li>
                <li className="py-4">
                    <button className="hidden xl:block font-bold text-white bg-[#1DA1F2] px-4 py-2 rounded-lg w-36">Qweet</button>
                    <button className="xl:hidden font-bold text-white bg-[#1DA1F2] px-4 py-4 rounded-full"><BsPencilSquare /></button>
                </li>
            </ul>

            <div className="flex absolute gap-2 bottom-16">
                <div>
                    <img src="https://res.cloudinary.com/drjisfpis/image/upload/v1686544474/socioSphere/profile-8_coy7oo.jpg" alt="Post Image" className="w-10 h-10 border rounded-full" />
                </div>
                <div className="hidden xl:flex flex-col">
                    <span className="text-sm font-semibold"> {`${user.firstName} ${user.lastName}`} </span>
                    <span className="text-sm  text-gray-400"> {user.username} </span>
                </div>
            </div>

        </aside>
    )
}

export default Sidebar