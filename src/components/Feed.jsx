import Post from "./Post"

function Feed() {
    // const posts = posts;
    return (
        <>
            <div className="ml-16 xl:ml-56 flex flex-col overflow-y-scroll flex-grow">

                <Post />
                <Post />
                <Post />
            </div>
        </>
    )
}

export default Feed