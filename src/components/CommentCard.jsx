function CommentCard({comment}) {
  return (
    <article className="w-100 p-4 flex flex-col gap-2 border-b ">
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 border rounded-full">
          <img src={comment.avatarURL} alt="Post Image" className="w-10 h-10 border rounded-full" />
        </div>
        <span className="text-sm font-semibold">{comment.username}</span>
        <span className="text-xs text-gray-400"> Jul 11</span>
      </div>
      {/* Post Contents */}
      <div>
        <p className="text-sm">
          {comment.text}
        </p>
      </div>
    </article>
  )
}

export default CommentCard