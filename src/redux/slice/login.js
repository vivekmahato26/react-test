import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export default createSlice({
    name:"Login",
    initialState:{
        value:{},
        status: "pending",
        error: null
    },
    reducers:{

    },
    extraReducers: builder => builder.addCase(Login.pending, (state,action)=>{
        state.status = "pending";
        state.error= null
    })
    .addCase(Login.rejected, (state,action) => {
        state.error = action.error;
        state.status = "rejected";
    })
    .addCase(Login.fulfilled, (state,action) => {
        state.error = null;
        state.status = "fulfilled";
        state.value = action.payload;
        localStorage.setItem("userId", action.payload._id)
        localStorage.setItem("email", action.payload.email)
    })
})

export const Login = createAsyncThunk("Login", async(data)=>{
    try {
        const {data:res} = await axios.post("https://app.codex.today/login",data);
        return res;
    } catch (error) {
        return error.message
    }
})