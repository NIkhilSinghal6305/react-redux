import axios from "../api/axiosconfig";
import { loaduser } from "./UserSlice";

export const asyncusers = () => async (dispatch, getState) => {
    try {
        console.log("Current State >>>>>>>>>>> ",getState());
        
        const {data} = await axios.get('/users')
        dispatch(loaduser(data));
        
    } catch (error) {
        console.log(error);
        
    }   
}