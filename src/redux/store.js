import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './features/productsSlice'; // Use the correct relative path

const store = configureStore({
  reducer: {
    products: productsReducer,
  },
});

export default store;