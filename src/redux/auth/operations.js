import { createAsyncThunk } from "@reduxjs/toolkit"
import { axios } from "axios"

axios.defaults.baseURL = "https://connections-api.goit.global"
export const register = createAsyncThunk("auth/register", async () => {
    
})