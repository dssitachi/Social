import postImg from '../assets/Screenshot 2023-07-22 at 8.03.35 PM.png';
import { AiOutlineHeart, AiOutlineComment, AiOutlineShareAlt } from "react-icons/ai";
import { BsBookmarkPlus } from 'react-icons/bs';

function Post({ post }) {
    return (
        <>
            <div className="max-w-lg p-4 m-4 flex flex-col gap-2">
                {/* Username */}
                <div className="flex items-center gap-2">
                    <div className="w-10 h-10 border rounded-full bg-lime-300"></div>
                    <span className="text-sm font-semibold">Uchiha Itachi</span>
                    <span className="text-xs text-gray-400"> Jul 11</span>
                </div>
                {/* image */}
                <div>
                    <img src={postImg} alt="Post Image" className="max-h-[500px] w-full" />
                </div>
                {/* Likes comment */}
                <div className="flex justify-between">
                    <div className="flex gap-4">
                        <span> <AiOutlineHeart size={28} /> </span>
                        <span> <AiOutlineComment size={28} /> </span>
                        <span> <AiOutlineShareAlt size={28} /> </span>
                    </div>
                    <div>
                        <span> <BsBookmarkPlus size={24} /> </span>
                    </div>
                </div>

                <div>

                </div>

            </div>
        </>
    )
}

export default Post