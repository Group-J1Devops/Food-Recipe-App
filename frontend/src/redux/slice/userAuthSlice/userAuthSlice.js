import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loginApi, registerApi } from "../../../Api/UserApis/userapi";
import toast from "react-hot-toast";

//user register
export const userRegister = createAsyncThunk("userRegister", async (data) => {
  try {
    const response = await registerApi(data.data, data.header);

    if (response.status === 200) {
      toast.success("User Registered Successfully!");
      return response.data;
    } else {
      toast.error(response.response.data.errorMessage);
    }
  } catch (error) {
    throw error;
  }
});

//user login api
export const userLogin = createAsyncThunk("userLogin", async (data) => {
  try {
    const response = await loginApi(data);

    if (response.status === 200) {
      localStorage.setItem("usertoken", response.data.result.token);
      toast.success("User Logged in Successfully!");
      return response.data;
    } else {
      toast.error(response.response.data.errorMessage);
    }
  } catch (error) {
    throw error;
  }
});

//Create Slice(for action and reducer)

export const UserSlice = createSlice({
  name: "UserSlice",
  initialState: {
    user: [],
    userLoggedIn: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(userRegister.pending, (state) => {
        state.loading = true;
      })
      .addCase(userRegister.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(userRegister.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    //user login add case
    builder
      .addCase(userLogin.pending, (state) => {
        state.loading = true;
      })
      .addCase(userLogin.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(userLogin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default UserSlice.reducer;
