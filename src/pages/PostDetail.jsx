import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getCommentsService } from "../services/commentServices";


function PostDetail() {
    const [comments, setComments] = useState([]);
    const { id } = useParams();
    const { allPosts } = useSelector(state => state.feed);
    const post = allPosts.find(post => post._id == id);
    
    useEffect(() => {
        (async function fetchPostComments() {
            const response = await getCommentsService(post._id);
            // console.log(response)
        })();
    }, []);

    return (
            <section className="max-w-lg p-4 m-4 flex flex-col gap-2 border">
            {/* UserHandle */}
            <div className="flex items-center gap-2">
                <div className="w-10 h-10 border rounded-full">
                    <img src={post.avatarURL} alt="Post Image" className="w-10 h-10 border rounded-full" />
                </div>
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
            {/* <div className="flex justify-between">
                <div className="flex gap-4">
                    <span className="cursor-pointer" onClick={handleLike}> { isPostLiked ?  <AiFillHeart size={28} color="red" /> : <AiOutlineHeart size={28}/> } </span>
                    <span className="cursor-pointer" onClick={toggleCommentPopup} > <AiOutlineComment size={28} /> </span>
                    {showCommentPopup && <CommentPopup onClose={toggleCommentPopup} postId={post._id} />}
                    <span className="cursor-pointer"> <AiOutlineShareAlt size={28} /> </span>
                </div>
                <div>
                    <span className="cursor-pointer"> <BsBookmarkPlus size={24} /> </span>
                </div>
            </div> */}

            <div>
                { comments.map(comment => {
                    return (
                        <div className="text-red"> {comment.text} </div>
                    )
                }) }
            </div>
        
        </section>
        
    )
}

export default PostDetail