import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoggedIn:localStorage.getItem('isLoggedIn') || false,
    Role:localStorage.getItem("role") || "",
    data:localStorage.getItem('data') || { }
}


const authSlice = createSlice({
    name:'authslicer',
    initialState,
    reducers:{}
})

export const {} = authSlice.actions
export default authSlice.reducer