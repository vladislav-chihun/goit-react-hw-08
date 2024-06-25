import { createSlice } from "@reduxjs/toolkit";
import {logIn, register} from "./operations"

const authSlice = createSlice({
    name: "auth",
    initialState:{
        user: {
            name: null,
            email: null,
        },
        token: null,
        isLoggedIn: false,
        isRefreshing: false,
        isLoading:false
    },
    extraReducers: builder => builder.addCase(register.pending, (state,action) => {
        state.isLoading = true
    }).addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user
        state.token = action.payload.token
        state.isLoading = false
        state.isLoggedIn = true
    }).addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload.user
        state.token = action.payload.token
        state.isLoggedIn = true
    })

})
export default authSlice.reducer