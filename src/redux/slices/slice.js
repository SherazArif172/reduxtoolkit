import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const createUser = createAsyncThunk(
  "createUser",
  async (data, { rejectWithValue }) => {
    try {
      console.log(data);

      const response = await axios.post(
        "https://678265b3c51d092c3dcf593f.mockapi.io/crude",
        data
      );
      return response.data; // Use response.data for axios
    } catch (error) {
      // Use rejectWithValue to handle errors
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const readUser = createAsyncThunk(
  "readUser",
  async (rejectWithValue) => {
    try {
      const result = await axios.get(
        "https://678265b3c51d092c3dcf593f.mockapi.io/crude"
      );
      return result;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

export const slice = createSlice({
  name: "slice",
  initialState: {
    users: [],
    loading: false,
    error: null,
  },
  //   reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createUser.pending, (state) => {
        state.loading = true;
        state.error = null; // Clear error on new request
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.loading = false;
        state.users.push(action.payload); // Add user to the state
      })
      .addCase(createUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload; // Capture error message
      });

    //get users

    builder
      .addCase(readUser.pending, (state) => {
        state.loading = true;
        state.error = null; // Clear error on new request
      })
      .addCase(readUser.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload; // read user
      })
      .addCase(readUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload; // Capture error message
      });
  },
});

export default slice.reducer;
