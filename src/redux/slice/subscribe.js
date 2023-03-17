import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export default createSlice({
    name:"Subscribe",
    initialState:{
        value:{},
        status: "pending",
        error: null
    },
    reducers:{

    },
    extraReducers: builder => builder.addCase(Subscribe.pending, (state,action)=>{
        state.status = "pending";
        state.error= null
    })
    .addCase(Subscribe.rejected, (state,action) => {
        state.error = action.error;
        state.status = "rejected";
    })
    .addCase(Subscribe.fulfilled, (state,action) => {
        state.error = null;
        state.status = "fulfilled";
        state.value = action.payload;
    })
})

export const Subscribe = createAsyncThunk("Subscribe", async(data)=>{
    try {
        const {data:res} = await axios.post("https://app.codex.today/subscribe",data);
        return res;
    } catch (error) {
        return error.message
    }
})