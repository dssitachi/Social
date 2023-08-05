import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Post from "../components/Post";


function Profile() {
    const { allPosts } = useSelector(state => state.feed);
    const { user } = useSelector(state => state.auth);
    const navigate = useNavigate();
    
    const myPosts = allPosts.filter(post => post.username == user.username);
    
    function handleClick(id) {
        navigate(`/posts/${id}`)
    }

    return (
        <section className="ml-24 xl:ml-56 max-w-xl flex flex-col overflow-y-scroll flex-grow border-x">
            {myPosts?.map((post, index) => {
                return (
                    <Post key={post._id} post={post} onClick={() => { handleClick(index) }} isPopup={false} />
                );
            })}
        </section>
    )
}

export default Profile