import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { handleAddComment } from "./FeedSlice";
import { AiOutlineCloseCircle } from "react-icons/ai";
import Post from "./Post";

function CommentPopup({ post, postId, onClose }) {
    const [comment, setComment] = useState("");
    const { token } = useSelector(state => state.auth);
    const dispatch = useDispatch();

    function addComment() {
        dispatch(handleAddComment({ comment, postId, token }));
        onClose();
    }
    
    return (
        <section className="fixed inset-0 flex items-start justify-center z-50 bg-black bg-opacity-40 bg-fixed">
            <div className="mt-12 flex flex-col flex-grow bg-white bg-opacity-100 max-w-xl rounded-lg">
                <div className="flex justify-end">
                    <button className="p-2 rounded" onClick={onClose}>
                        <span> <AiOutlineCloseCircle size={24} /></span>
                    </button>
                </div>

                <Post post={post} isPopup={true} />

                <textarea placeholder="Tweet Your Reply" cols="30" rows="5" className="m-4 border p-2 focus:outline-none"
                    value={comment} onChange={(e) => { setComment(e.target.value) }}></textarea>
                <div className="flex justify-end">
                    <button onClick={addComment}
                        className={`mb-2 bg-[#1DA1F2] text-white font-semibold py-2 px-4 rounded-full mr-2
                            ${comment.length ? 'cursor-pointer' : 'cursor-not-allowed bg-blue-300'}
                        `}
                        disabled={comment.length ? false : true}
                    >
                        Reply
                    </button>
                </div>
            </div>
        </section>
    )
}

export default CommentPopup