import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  status: null,
  isLoading: false,
  isError: null,
 
};
;

export const addUser = createAsyncThunk("user/addUser", async (newUser) => {
  try {
    const res = await fetch("https://react-fast-pizza-api.onrender.com/api/order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    });

    if (!res.ok) {
      throw new Error("Failed to add order");
    }
    const data = await res.json();
    return {data};
 
  } catch (e) {
    console.error(e.message);
    throw e;
  }
});

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  extraReducers: (builder) => {
    builder.addCase(addUser.pending, (state) => {
      state.isError = false;
      state.isLoading = true;
    });
    builder.addCase(addUser.fulfilled, (state, action) => {
      state.status = "success";
      state.users.push(action.payload); 
    });
    builder.addCase(addUser.rejected, (state, action) => {
      state.status = "fail";
      state.isError = action.error.message;
    });
  },
});

export default userSlice.reducer;