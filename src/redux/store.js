import { configureStore } from '@reduxjs/toolkit'
import fetcherSlice from './fetcherSlice'

const store = configureStore({
  reducer: {
    fetcherSlice,
  }
});

export default store