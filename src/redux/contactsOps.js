import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


axios.defaults.baseURL = "https://6666f77ca2f8516ff7a5b0dc.mockapi.io"

export const fetchContacts = createAsyncThunk("contacts/fetchAll", async (_,thunkAPI) => {
    try {
        const response = await axios.get(`/contacts`)
        return response.data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    } 
})
export const addContact = createAsyncThunk("contacts/addContact", async (value, thunkAPI) => {
    try {
        const response = await axios.post(`/contacts`,value)
        return response.data
    } catch (error) {
         return thunkAPI.rejectWithValue(error.message)
    }
})
export const deleteContact = createAsyncThunk("contacts/deleteContact", async (contactId, thunkAPI) => {
    try {
        const response = await axios.delete(`/contacts/${contactId}`)
        return response.data
    } catch (error) {
         return thunkAPI.rejectWithValue(error.message)
    }
})