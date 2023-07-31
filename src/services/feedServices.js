import axios from "axios";
import { BOOKMARK_URL, FEED_URL } from "./apiUrls";

export function feedService(data) {
    return axios.get(FEED_URL, data);
}

export function createPostService(post, token) {
    return axios.post(
        `${FEED_URL}`,
        { postData: post },
        {
            headers: { authorization: token },
        }
    );
}

export function likePostService(postId, token) {
    return axios.post(
        `${FEED_URL}/like/${postId}`,
        {},
        {
            headers: { authorization: token },
        }
    );
}

export function undoLikePostService(postId, token) {
    return axios.post(
        `${FEED_URL}/dislike/${postId}`,
        {},
        {
            headers: { authorization: token },
        }
    );
}

export function getBookMarksService(token) {
    return axios.get(`${BOOKMARK_URL}/bookmark`, {
        headers: { authorization: token },
    });
}

export function bookMarkPostService(postId, token) {
    return axios.post(
        `${BOOKMARK_URL}/bookmark/${postId}`,
        {},
        { headers: { authorization: token } }
    );
}

export function undoBookMarkPostService(postId, token) {
    return axios.post(
        `${BOOKMARK_URL}/remove-bookmark/${postId}`,
        {},
        { headers: { authorization: token } }
    );
}
