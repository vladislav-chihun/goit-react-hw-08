import { createAsyncThunk } from "@reduxjs/toolkit"
import  axios  from "axios"

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

const setAuthHeader = token => { axios.defaults.headers.common.Authorization = `Bearer ${token}` }

const removeAuthHeader = () => { axios.defaults.headers.common.Authorization = "" }

export const register = createAsyncThunk("auth/register",
    async (newUser, thunkAPI) => {
        try {
        const response = await axios.post("/users/signup", newUser)
        return response.data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }

})
export const logIn = createAsyncThunk("auth/login", async (userInfo, thunkAPI) => {
    try {
        const response = await axios.post("/users/login", userInfo)
        setAuthHeader(response.data.token)
        return response.data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
    
})
export const logOut = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
    try {
        const response = await axios.post("/users/logout")
        removeAuthHeader()
        return response.data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
})

export const refreshUser = createAsyncThunk("auth/refresh", async (_, thunkAPI) => {
    const reduxState = thunkAPI.getState();
    setAuthHeader(reduxState.auth.token)

    const response = await axios.get("/users/current")
    return response.data
}, {
    condition(_, thunkAPI) {
        const reduxState = thunkAPI.getState()
        return reduxState.auth.token  !== null;
}})