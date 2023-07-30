import { useSelector } from "react-redux"
import Post from "../components/Post";
import { useNavigate } from "react-router-dom";

function Bookmark() {
    const { bookmarkPosts, allPosts } = useSelector(state => state.feed);
    const navigate = useNavigate();
    
    const bookPosts = allPosts.filter(x => bookmarkPosts.some(y => y == x._id));
    
    function handleClick(id) {
        navigate(`/posts/${id}`)
    }


    return (
        <section className="ml-24 xl:ml-56 max-w-xl flex flex-col overflow-y-scroll flex-grow border-x">
            {bookPosts?.map((post, index) => {
                return (
                    <Post key={post._id} post={post} onClick={() => { handleClick(index) }} isPopup={false} />
                );
            })}
        </section>
    )
}

export default Bookmark