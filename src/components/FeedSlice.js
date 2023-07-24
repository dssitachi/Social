import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { feedService, likePostService } from "../services/feedServices";


const initialState = {
    allPosts: [],
    isLoading: false,
    comments: [],
    bookmarkPosts: [],
    isNextPaginatedPostLoading: false,
    page: 1
}

export const handleFetchFeed = createAsyncThunk("feed/fetchPosts", async (thunkAPI) => {
    try {
        const response = await feedService();
        return response.data.posts;
    } catch (error) {
        console.log(error);
        return thunkAPI.rejectWithValue("Error occured while fetching feed")
    }
})

export const handleLikePost = createAsyncThunk("feed/handleLikePost", async ({postId, token}, thunkAPI) => {
    try{
        const response = await likePostService(postId, token);
        return response.data.posts;
    }
    catch(error){
        console.log(error)
        return thunkAPI.rejectWithValue(error); 
    }
})

const feedSlice = createSlice({
    name: "feed",
    initialState,
    reducers: {
        setIsNextPaginatedPostLoading(state, action) {
            state.isNextPaginatedPostLoading = action.payload
        },
        setPage(state, action) {
            state.page = action.payload
        }
    },
    extraReducers(builder) {
        builder
        .addCase(handleFetchFeed.pending, (state) => {
            state.isLoading = true;
        })

        .addCase(handleFetchFeed.fulfilled, (state, action) => {
            state.isLoading = false;
            state.allPosts = action.payload
        })

        .addCase(handleFetchFeed.rejected, (state) => {
            state.isLoading = false;
        })

        .addCase(handleLikePost.pending, (state) => {
            state.isLoading = true;
        })

        .addCase(handleLikePost.fulfilled, (state, action) => {
            state.isLoading = false;
            state.allPosts = action.payload
        })

        .addCase(handleLikePost.rejected, (state) => {
            state.isLoading = false;
        })

    }
})

export const feedReducer = feedSlice.reducer;
export const { setIsNextPaginatedPostLoading, setPage } = feedSlice.actions