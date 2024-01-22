import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  menuItems: [],
  isLoading: false,
  isError: false,
};

export const getMenu = createAsyncThunk("menu/getMenu", async () => {
  try {
    const res = await fetch(
      "https://react-fast-pizza-api.onrender.com/api/menu"
    );
    if (!res.ok) {
      throw new Error('Failed to fetch');
    }
    const { data } = await res.json();
    return data;
  } catch (e) {
    console.error(e.message);
    throw e;
  }
});

const menuSlise = createSlice({
  name: "menu",
  initialState: initialState,
  extraReducers: (builder) => {
    builder.addCase(getMenu.pending, (state) => {
      state.isError = false;
      state.isLoading = true;
    });
    builder.addCase(getMenu.fulfilled, (state, { payload }) => {
      state.menuItems = payload;
      state.isLoading = false;
    });
    builder.addCase(getMenu.rejected, (state) => {
      state.isError = true;
      state.isLoading = false;
    });
  },
});

export default menuSlise.reducer;
