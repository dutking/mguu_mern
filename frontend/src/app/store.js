import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import applicationReducer from "../features/applications/applicationSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    applications: applicationReducer,
  },
});
