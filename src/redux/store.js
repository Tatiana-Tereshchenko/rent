import { configureStore } from '@reduxjs/toolkit';
import catalogReducer from './advertSlice';

export const store = configureStore({
  reducer: {
    catalog: catalogReducer,
  },
});
