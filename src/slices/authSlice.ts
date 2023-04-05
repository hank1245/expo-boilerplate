import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  email: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
});

export const reducer = authSlice.actions;

export default authSlice.reducer;
