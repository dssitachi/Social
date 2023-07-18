import axios from "axios";
import { LOGIN_URL, SIGNUP_URL } from "./apiUrls";

export function loginService(data) {
    return axios.post(LOGIN_URL, data);
}

export const signupService = async(firstName, lastName, username, password,avatarURL) =>{
    return await axios.post("/api/auth/signup", {firstName, lastName, username, password,avatarURL})
}