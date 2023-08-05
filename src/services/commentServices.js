import axios from "axios";
import { COMMENT_URL } from "./apiUrls";

export function getCommentsService(postId) {
    return axios.get(`${COMMENT_URL}/${postId}`);
}
export function addCommentPopupService(comment, postId, token) {
    return axios.post(
        `${COMMENT_URL}/addPopup/${postId}`,
        { commentData: comment },
        { headers: { authorization: token } }
    );

    // return new Promise((_, reject) => {
    //     setTimeout(() => {
    //         reject()
    //     },3000);
    // })
}

export function addCommentService(comment, postId, token) {
    return axios.post(
        `${COMMENT_URL}/add/${postId}`,
        {commentData: comment},
        {headers: { authorization: token }}
    );
}

export const deleteComment = async (postId, commentId, token) => {
    return await axios.post(
        `${COMMENT_URL}/delete/${postId}/${commentId}`,
        {},
        { headers: { authorization: token } }
    );
};

export const editComment = async (postId, commentId, commentData, token) => {
    return await axios.post(
        `${COMMENT_URL}/edit/${postId}/${commentId}`,
        { commentData },
        { headers: { authorization: token } }
    );
};
