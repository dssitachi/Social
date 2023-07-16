import { createSlice } from '@reduxjs/toolkit';
import { AUTHKEY } from '../utils/constants';

const initialState = {
    user: JSON.parse(localStorage.getItem(AUTHKEY))?.user,
    token: JSON.parse(localStorage.getItem(AUTHKEY))?.token, 
}
console.log(initialState)

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {

    }
})


export const authReducer = authSlice.reducer;