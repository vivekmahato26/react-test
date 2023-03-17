import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export default createSlice({
    name:"Register",
    initialState:{
        value:{},
        status: "pending",
        error: null
    },
    reducers:{

    },
    extraReducers: builder => builder.addCase(Register.pending, (state,action)=>{
        state.status = "pending";
        state.error= null
    })
    .addCase(Register.rejected, (state,action) => {
        state.error = action.error;
        state.status = "rejected";
    })
    .addCase(Register.fulfilled, (state,action) => {
        state.error = null;
        state.status = "fulfilled";
        state.value = action.payload;
    })
})

export const Register = createAsyncThunk("Register", async(data)=>{
    try {
        const {data: res} = await axios.post("https://app.codex.today/createUser",data);
        return res;
    } catch (error) {
        return error.message
    }
})