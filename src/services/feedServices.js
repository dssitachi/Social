import axios from "axios";
import { FEED_URL } from "./apiUrls";

export function feedService(data) {
    return axios.get(FEED_URL, data);
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
