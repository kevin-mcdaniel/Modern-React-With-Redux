import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const fetchUsers = createAsyncThunk('users/fetch', async () => {
    const response = await axios.get('http://localhost:3005/users');
    //dev only
    //await pause(10000);
    return response.data;
});
//base type(1st argument) string, used to generate the types of actions(pending/fulfilled/rejected) users/fetch + action

//DEV ONLY TEST FUNCTION TO ADD PAUSE
const pause = (duration) =>{
    return new Promise((resolve) =>{
        setTimeout(resolve, duration)
    })
}

export { fetchUsers }