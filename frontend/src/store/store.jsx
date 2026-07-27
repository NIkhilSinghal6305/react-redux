import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./UserSlice.jsx";


export const store = configureStore({
  reducer: {
    user: UserSlice,
  },
});
