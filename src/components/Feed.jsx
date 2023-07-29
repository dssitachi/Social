import React, { useEffect, useRef } from "react"
import Post from "./Post"
import { useDispatch, useSelector } from "react-redux";
import { handleFetchFeed, setIsNextPaginatedPostLoading, setPage } from "./FeedSlice";
import Loader from "./Loader";
import { useNavigate } from "react-router-dom";

function Feed() {
    // const posts = posts;
    const dispatch = useDispatch();
    const { allPosts, page, isNextPaginatedPostLoading } = useSelector(state => state.feed);
    const bottomRef = useRef(null);
    const navigate = useNavigate();
    const displayedPosts = allPosts.slice(0, page * 5);

    useEffect(() => {
        dispatch(handleFetchFeed());
    }, []);

    useEffect(() => {
        if (displayedPosts?.length > 0 && displayedPosts?.length < allPosts.length) {
            const elementRef = bottomRef.current;
            const observer = new IntersectionObserver(handleIntersection);
            if (elementRef) observer.observe(elementRef);
            return () => {
                observer?.unobserve(elementRef);
            }
        }
    }, [page, displayedPosts])

    useEffect(() => {
        var timeoutId;
        if (isNextPaginatedPostLoading) {
            timeoutId = setTimeout(() => {
                dispatch(setIsNextPaginatedPostLoading(false));
            }, 4000);
        } else {
            clearTimeout(timeoutId);
        }
        return () => {
            clearTimeout(timeoutId)
        }
    }, [setIsNextPaginatedPostLoading, displayedPosts])

    function handleIntersection(entries) {
        const firstEntry = entries[0];
        if (firstEntry.isIntersecting) {
            dispatch(setIsNextPaginatedPostLoading(true));
            dispatch(setPage(page + 1));
        }
    }

    function handleClick(id) {
        navigate(`/posts/${id}`)
    }

    return (
        <section className="ml-24 xl:ml-56 max-w-xl flex flex-col overflow-y-scroll flex-grow border-x">
            
            {displayedPosts?.map((post, index) => {
                return (
                    <React.Fragment key={post._id}>
                        <Post post={post} onClick={() => {handleClick(post._id)}} isPopup={false}/>
                        {index === displayedPosts?.length - 1 && (
                            <div
                                ref={bottomRef}
                                style={{ height: 0, paddingBottom: "3.5rem" }}
                            ></div>
                        )}
                    </React.Fragment>
                );
            })}

            {
                (displayedPosts?.length !== allPosts?.length) &&
                (isNextPaginatedPostLoading && (
                    <Loader />
                ))
            }

        </section>

    )
}

export default Feed