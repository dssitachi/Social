import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AUTHKEY } from '../utils/constants';
import { displayToast } from '../utils/toast';
import { loginService, signupService } from '../services/authServices';

const initialState = {
    user: JSON.parse(localStorage.getItem(AUTHKEY))?.user,
    token: JSON.parse(localStorage.getItem(AUTHKEY))?.token,
    isLoading: false
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        handleLogout: (state) => {
            localStorage.removeItem(AUTHKEY);
            state.user = null;
            state.token = null;
        }
    },
    extraReducers(builder) {
        builder
        .addCase(handleLogin.pending, (state, action) => {
            state.isLoading = true;
        })
        
        .addCase(handleLogin.fulfilled, (state, action) => {
            state.user = action.payload.foundUser;
            state.token = action.payload.encodedToken;
            state.isLoading = false;
            localStorage.setItem(
                AUTHKEY,
                JSON.stringify({
                    user: action.payload.foundUser,
                    token: action.payload.encodedToken,
                })
            );
            displayToast("success", `Welcome ${action.payload.foundUser.firstName}`);
        })
        
        .addCase(handleLogin.rejected, (state, action) => {
            state.isLoading = false;
        })

        .addCase(handleSignup.pending, (state, action) => {
            state.isLoading = true;
        })

        .addCase(handleSignup.fulfilled, (state, action) => {
            state.user = action.payload.foundUser;
            state.token = action.payload.encodedToken;
            state.isLoading = false;
            localStorage.setItem(
                AUTHKEY,
                JSON.stringify({
                    user: action.payload.foundUser,
                    token: action.payload.encodedToken,
                })
            );
            console.log(action.payload)
            displayToast("success", `Welcome ${action.payload.createdUser.firstName}`);
        })

        .addCase(handleSignup.rejected, (state, action) => {
            state.isLoading = false;
        })
    }
})

export const handleLogin = createAsyncThunk('auth/handleLogin', async({username, password}, thunkAPI) => {
    try {
        const response = await loginService({username, password});
        return response.data;
    } catch(error) {
        console.log(error)
        displayToast("error", "Username or password is incorrect")
        return thunkAPI.rejectWithValue("Username or password is incorrect")
    }
})

export const handleSignup = createAsyncThunk(
    "auth/handleSignup",
    async ({ firstName, lastName, username, password,avatarURL }, thunkAPI) => {
        try {
            const response = await signupService(firstName, lastName, username, password,avatarURL);
            return response.data;
        } catch (error) {
            console.error(error);
            return thunkAPI.rejectWithValue("Username or password is incorrect")
        }
    }
)

export const authReducer = authSlice.reducer;
export const { handleLogout } = authSlice.actions;