
function AddComment({ newComment, setNewComment, handleAddComment }) {

    return (
        <div className="flex flex-col border-b">
            <textarea placeholder="Vibe Your Reply" cols="30" rows="3" className="mt-4 mb-2 mx-4 border p-2 focus:outline-none"
                value={newComment} onChange={(e) => { setNewComment(e.target.value) }}></textarea>

            <div className="flex justify-end mb-2">
                <button onClick={handleAddComment}
                    className={`bg-[#1DA1F2] text-white font-semibold py-2 px-4 rounded-full mr-4
                            ${newComment.length ? 'cursor-pointer' : 'cursor-not-allowed bg-blue-200'}`}
                    disabled={newComment.length ? false : true}>
                    Reply
                </button>
            </div>
        </div>
    )
}

export default AddComment