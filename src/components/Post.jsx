import { AiOutlineHeart, AiOutlineComment, AiOutlineShareAlt, AiFillHeart } from "react-icons/ai";
import { BsBookmarkPlus, BsBookmarkPlusFill } from 'react-icons/bs';
import { useDispatch, useSelector } from "react-redux";
import { handleBookmarkPost, handleLikePost, handleUndoBookmarkPost, handleUndoLikePost } from "./FeedSlice";
import CommentPopup from "./CommentPopup";
import { useState } from "react";

function Post({ post, onClick, isPopup }) {

    const { user, token } = useSelector(state => state.auth);
    const { bookmarkPosts } = useSelector(state => state.feed);
    const [showCommentPopup, setShowCommentPopup] = useState(false);
    const dispatch = useDispatch();
    const isBookmarked = bookmarkPosts.find(x => x == post._id) ? true : false;
    const isPostLiked = post?.likes?.likedBy?.find(likedUser => likedUser.username == user.username) ? true : false;

    function handleLike() {
        if(isPostLiked) 
            dispatch(handleUndoLikePost({ postId: post._id, token}));    
        else
            dispatch(handleLikePost({ postId: post._id, token }));
        
    }

    function handleBookmark() {
        if(isBookmarked)
            dispatch(handleUndoBookmarkPost({ postId: post._id, token}))
        else
            dispatch(handleBookmarkPost({ postId: post._id, token}))
    }

    function toggleCommentPopup() {
        setShowCommentPopup(!showCommentPopup);
    }

    return (
        <>
            <article className="w-100 p-4 flex flex-col gap-2 border-b cursor-pointer" onClick={onClick}>
                {/* UserHandle */}
                <div className="flex items-center gap-2">
                    <div className="w-10 h-10 border rounded-full">
                        <img src={post?.avatarURL} alt="Post Image" className="w-10 h-10 border rounded-full" />
                    </div>
                    <span className="text-sm font-semibold">{post?.username}</span>
                    <span className="text-xs text-gray-400"> Jul 11</span>
                </div>
                {/* Post Contents */}
                <div>
                    <p className="text-sm">
                        {post?.content}
                    </p>
                </div>

                {!isPopup && (
                    <>
                        {post?.mediaURL &&
                            <div>
                                <img src={post.mediaURL} alt="Post Image" className="max-h-[500px] w-full" />
                            </div>
                        }
                        <div className="flex justify-around items-center">
                            <div className="flex gap-2 items-center">
                                <span className="cursor-pointer" onClick={(e) => { e.stopPropagation(); handleLike() }}>
                                    {isPostLiked ? <AiFillHeart size={20} color="red" /> : <AiOutlineHeart size={20} />}
                                </span>
                                <span className="text-sm"> {post?.likes?.likedBy.length} </span>
                            </div>
                            <span className="cursor-pointer" onClick={(e) => { e.stopPropagation(); toggleCommentPopup() }} > <AiOutlineComment size={20} /> </span>
                            <span className="cursor-pointer"> <AiOutlineShareAlt size={24} /> </span>
                            <span className="cursor-pointer" onClick={(e) => { e.stopPropagation(); handleBookmark() }}>
                                    {isBookmarked ? <BsBookmarkPlusFill size={20} /> : <BsBookmarkPlus size={20} />}
                            </span>
                        </div>
                    </>
                )}

            </article>
            {showCommentPopup && <CommentPopup post={post} onClose={toggleCommentPopup} postId={post._id} />}
        </>

    )
}

export default Post