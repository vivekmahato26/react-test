import { configureStore } from "@reduxjs/toolkit";
import login from "./slice/login";
import register from "./slice/register";
import subscribe from "./slice/subscribe";

export default configureStore({
    reducer:{
        Login : login.reducer,
        Register: register.reducer,
        Subscribe: subscribe.reducer
    }
})