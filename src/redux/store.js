import { configureStore } from '@reduxjs/toolkit'
import fetcherSlice from './fetcherSlice'
import userSlice from './userSlice'

const store = configureStore({
  reducer: {
    fetcherSlice,
    userSlice,
  }
});

export default store