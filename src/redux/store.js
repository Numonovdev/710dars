import { configureStore } from '@reduxjs/toolkit';
import likesSlice from './likesSlice';

export const store = configureStore({
  reducer: {
    likes: likesSlice,
  },
});
