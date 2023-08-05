import AddPost from "./AddPost";
import { AiOutlineCloseCircle } from "react-icons/ai"

function AddPostPopup({onClose}) {
    return (
        <section className="fixed inset-0 flex items-start justify-center z-50 bg-black bg-opacity-40 bg-fixed">
            <div className="mt-12 flex flex-col flex-grow bg-white bg-opacity-100 max-w-xl rounded-lg">
                <div className="flex justify-between items-center">
                    <span className="font-semibold text-xl p-2">Add New Post</span>
                    <button className="p-2 rounded" onClick={onClose}>
                        <span> <AiOutlineCloseCircle size={24} /></span>
                    </button>
                </div>
                <AddPost />
            </div>
        </section>
    )
}

export default AddPostPopup