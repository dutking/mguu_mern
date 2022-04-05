import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import applicationService from "./applicationService";

const initialState = {
  applications: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// Get applications
export const getAllApplications = createAsyncThunk(
  "applications/getAll",
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;

      return await applicationService.getAllApplications(token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const applicationSlice = createSlice({
  name: "application",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllApplications.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllApplications.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.applications = action.payload;
      })
      .addCase(getAllApplications.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = applicationSlice.actions;
export default applicationSlice.reducer;
