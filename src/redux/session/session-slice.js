import { createSlice } from '@reduxjs/toolkit';
import {
  registerThunk,
  logInThunk,
  logOutThunk,
  refreshThunk,
} from './auth-operation';

const initialState = {
  isAuth: false,
  token: null,
  user: {
    username: '',
    email: '',
    id: '',
    balance: '',
  },
  error: null,
  isLoading: false,
};

const sessionSlice = createSlice({
  name: 'session',
  initialState,
  extraReducers: {
    [registerThunk.pending](state) {
      state.isLoading = true;
    },
    [registerThunk.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.user = payload.user;
      state.token = payload.token;
      state.isAuth = true;
    },
    [registerThunk.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    [logInThunk.pending](state) {
      state.isLoading = true;
    },
    [logInThunk.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.user = payload.user;
      state.token = payload.token;
      state.isAuth = true;
    },
    [logInThunk.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    [logOutThunk.pending](state) {
      state.isLoading = true;
    },
    [logOutThunk.fulfilled](state) {
      state.isLoading = false;
      state.user = { username: '', email: '', id: '', balance: '' };
      state.token = null;
      state.isAuth = false;
    },
    [logOutThunk.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    [refreshThunk.pending](state) {
      state.isLoading = true;
    },
    [refreshThunk.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.user = payload;
      state.isAuth = true;
    },
    [refreshThunk.rejected](state, { payload }) {
      state.user = { username: '', email: '', id: '', balance: '' };
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export const sessionReducer = sessionSlice.reducer;
