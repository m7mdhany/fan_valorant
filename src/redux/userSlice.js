import { createSlice } from "@reduxjs/toolkit";
const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: '',
    userImg: '',
  },
  reducers: {
    change_user: (state, { payload }) => {
      state.user = payload
    },
    change_userImg: (state, { payload }) => {
      state.userImg = payload
    },
  },
})
export const { change_user, change_userImg } = userSlice.actions
export default userSlice.reducer