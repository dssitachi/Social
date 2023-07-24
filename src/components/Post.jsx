import postImg from '../assets/Screenshot 2023-07-22 at 8.03.35 PM.png';
import { AiOutlineHeart, AiOutlineComment, AiOutlineShareAlt } from "react-icons/ai";
import { BsBookmarkPlus } from 'react-icons/bs';
import { useDispatch, useSelector } from "react-redux";
import { handleLikePost } from "./FeedSlice";

function Post({ post }) {

    const { user, token } = useSelector(state => state.auth);
    const dispatch = useDispatch();
    function handleLike() {
        dispatch(handleLikePost({postId: post._id, token}))
    }

    const isPostLiked = post.likes.likedBy.find(likedUser => likedUser.username == user.username ) ? true : false;
    console.log(isPostLiked)

    return (
        <article className="max-w-lg p-4 m-4 flex flex-col gap-2 border">
            {/* UserHandle */}
            <div className="flex items-center gap-2">
                <div className="w-10 h-10 border rounded-full">
                    <img src={post.avatarURL} alt="Post Image" className="w-10 h-10 border rounded-full" />
                </div>
                {/* <div className="w-10 h-10 border rounded-full bg-lime-300"></div> */}
                <span className="text-sm font-semibold">{post.username}</span>
                <span className="text-xs text-gray-400"> Jul 11</span>
            </div>
            {/* Post Contents */}
            <div>
                <p className="text-sm">
                    {post.content}
                </p>
                <div className="p-2">
                <img src={post.mediaURL} alt="Post Image" className="max-h-[500px] w-full" />
                </div>
            </div>
            {/* Likes comment */}
            <div className="flex justify-between">
                <div className="flex gap-4">
                    { isPostLiked ? 'sdjfldskjf' : '' }
                    <span onClick={handleLike}> <AiOutlineHeart size={28} className={isPostLiked ? 'bg-red' : ''} /> </span>
                    <span> <AiOutlineComment size={28} /> </span>
                    <span> <AiOutlineShareAlt size={28} /> </span>
                </div>
                <div>
                    <span> <BsBookmarkPlus size={24} /> </span>
                </div>
            </div>

            <div>

            </div>
        
        </article>
    )
}

export default Post