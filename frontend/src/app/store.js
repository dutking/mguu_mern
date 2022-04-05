import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import applicationReducer from "../features/application/applicationSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    applications: applicationReducer,
  },
});
