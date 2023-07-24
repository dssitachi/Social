import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "../pages/authSlice";
import { feedReducer } from "../components/FeedSlice";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        feed: feedReducer
    }
})
