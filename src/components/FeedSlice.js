import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { bookMarkPostService, feedService, getBookMarksService, likePostService, undoBookMarkPostService, undoLikePostService } from "../services/feedServices";
import { addCommentPopupService } from "../services/commentServices";
import { displayToast } from "../utils/toast";


const initialState = {
    allPosts: [],
    isLoading: false,
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

export const handleUndoLikePost = createAsyncThunk("feed/handleUndoLikePost", async ({postId, token}, thunkAPI) => {
    try{
        const response = await undoLikePostService(postId, token);
        return response.data.posts;
    }
    catch(error){
        console.log(error)
        return thunkAPI.rejectWithValue(error); 
    }
})

export const handleAddComment = createAsyncThunk("feed/handleAddComment", async ({comment, postId, token}, thunkAPI) => {
    try{
        const response = await addCommentPopupService(comment, postId, token);
        displayToast("success", "Your reply has been sent")
        return response.data.posts;
    }
    catch(error){
        console.log(error)
        return thunkAPI.rejectWithValue(error); 
    }
})

export const handleGetBookmark = createAsyncThunk("feed/handleGetBookmark", async({token}, thunkAPI) => {
    try {
        const response = await getBookMarksService(token);
        return response.data.bookmarks;
    } catch(error) {
        console.log(error)
        return thunkAPI.rejectWithValue(error); 
    }
})

export const handleBookmarkPost = createAsyncThunk("feed/handleBookmarkPost", async({postId, token}, thunkAPI) => {
    try {
        const response = await bookMarkPostService(postId, token);
        displayToast("success", "Added to your bookmarks");
        return response.data.bookmarks;
    } catch(error) {
        console.log(error)
        return thunkAPI.rejectWithValue(error);
    }
})

export const handleUndoBookmarkPost = createAsyncThunk("feed/handleUndoBookmarkPost", async({postId, token}, thunkAPI) => {
    try {
        const response = await undoBookMarkPostService(postId, token);
        displayToast("success", "Removed from your bookmarks");
        return response.data.bookmarks;
    } catch(error) {
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

        .addCase(handleUndoLikePost.pending, (state) => {
            state.isLoading = true;
        })

        .addCase(handleUndoLikePost.fulfilled, (state, action) => {
            state.isLoading = false;
            state.allPosts = action.payload
        })

        .addCase(handleUndoLikePost.rejected, (state) => {
            state.isLoading = false;
        })

        .addCase(handleAddComment.pending, (state) => {
            state.isLoading = true;
        })

        .addCase(handleAddComment.fulfilled, (state, action) => {
            state.isLoading = false;
            state.allPosts = action.payload
        })

        .addCase(handleAddComment.rejected, (state) => {
            state.isLoading = false;
        })

        .addCase(handleGetBookmark.pending, (state) => {
            state.isLoading = true;
        })

        .addCase(handleGetBookmark.fulfilled, (state, action) => {
            state.isLoading = false;
            state.bookmarkPosts = action.payload
        })

        .addCase(handleGetBookmark.rejected, (state) => {
            state.isLoading = false;
        })

        .addCase(handleBookmarkPost.pending, (state) => {
            state.isLoading = true;
        })

        .addCase(handleBookmarkPost.fulfilled, (state, action) => {
            state.isLoading = false;
            state.bookmarkPosts = action.payload
        })

        .addCase(handleBookmarkPost.rejected, (state) => {
            state.isLoading = false;
        })

        .addCase(handleUndoBookmarkPost.pending, (state) => {
            state.isLoading = true;
        })

        .addCase(handleUndoBookmarkPost.fulfilled, (state, action) => {
            state.isLoading = false;
            state.bookmarkPosts = action.payload
        })

        .addCase(handleUndoBookmarkPost.rejected, (state) => {
            state.isLoading = false;
        })
    }
})

export const feedReducer = feedSlice.reducer;
export const { setIsNextPaginatedPostLoading, setPage } = feedSlice.actions