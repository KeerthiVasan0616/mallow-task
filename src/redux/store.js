import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/userReducer";

const store = configureStore({
  reducer: {
    user: userReducer, // Namespace must match the `useSelector` reference
  },
});

export default store;
