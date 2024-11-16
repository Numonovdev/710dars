import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: [],
};

const studentSlice = createSlice({
  name: 'likes',
  initialState,
  reducers: {
    add: (state, action) => {
      state.value = [...state.value, action.payload];
    },
    remove: (state, action) => {
      state.value = state.value.filter((value) => {
        return value.id !== action.payload.id;
      });
    },
  },
});
export const { add, remove } = studentSlice.actions;
export default studentSlice.reducer;
