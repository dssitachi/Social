import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { handleAddPost } from "./FeedSlice";


function AddPost() {

    const { user, token } = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const [post, setPost] = useState({
        firstName: user.firstName,
        lastName: user.lastName,
        content: "",
        mediaURL: ""
    });

    function handleClick() {
        dispatch(handleAddPost({post, token}))
    }

    return (
        <div className="flex flex-col border-b">
            <textarea placeholder="Something on your mind...." cols="30" rows="3" className="mt-4 mb-2 mx-4 border p-2 focus:outline-none"
                value={post.content} onChange={(e) => { setPost( {...post, content: e.target.value }) }}></textarea>

            <div className="flex justify-end mb-2">
                <button onClick={handleClick}
                    className={`bg-[#1DA1F2] text-white font-semibold py-2 px-4 rounded-full mr-4
                            ${post.content.length ? 'cursor-pointer' : 'cursor-not-allowed bg-blue-200'}`}
                    disabled={post.content.length ? false : true}>
                    Vibe
                </button>
            </div>
        </div>
    )
}

export default AddPost