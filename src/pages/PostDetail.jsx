import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addCommentService, getCommentsService } from "../services/commentServices";
import Post from "../components/Post";
import AddComment from "../components/AddComment";
import CommentCard from "../components/CommentCard";

function PostDetail() {
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState("");
    const { id } = useParams();
    const { allPosts } = useSelector(state => state.feed);
    const { token } = useSelector(state => state.auth);
    const post = allPosts.at(id);
    
    async function go() {
        try {
            const response = await addCommentService(newComment, post._id, token);
            setComments(response.data.comments);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        (async function fetchPostComments() {
            if(post?._id) {
            const response = await getCommentsService(post._id);
            setComments(response.data.comments);
            }
        })();
    }, [post]);



    return (
        <section className="ml-24 xl:ml-56 max-w-xl flex flex-col overflow-y-scroll flex-grow border-x">
            <Post isPopup={false} post={post} />
            <AddComment newComment={newComment} setNewComment={setNewComment} handleAddComment={go} />
            {
                comments.map(comment => (
                    <CommentCard key={comment._id} comment={comment} />
                ))
            }
        </section>
    )
}

export default PostDetail