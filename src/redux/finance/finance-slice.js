import { createSlice } from '@reduxjs/toolkit';

import {
  getTransactionsThunk,
  getSummaryThunk,
  getCategoriesThunk,
  addTransactionThunk,
  deleteTransactionThunk,
  editTransactionThunk,
} from './finance-operation';

const initialState = {
  transactions: [],
  categories: [],
  summary: null,
  isLoading: null,
  error: null,
};

const financeSlice = createSlice({
  name: 'finance',
  initialState,
  reducers: {
    resetFinance(state) {
      state.transactions = [];
      state.categories = [];
      state.summary = null;
      state.isLoading = null;
      state.error = null;
    },
  },
  extraReducers: {
    [getTransactionsThunk.pending]: state => {
      state.isLoading = true;
    },
    [getTransactionsThunk.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.transactions = payload;
      state.error = null;
    },
    [getTransactionsThunk.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    [addTransactionThunk.pending]: state => {
      state.isLoading = true;
    },
    [addTransactionThunk.fulfilled]: (state, { payload }) => {
      state.isLoading = false;

      state.transactions = [...state.transactions, payload];
    },
    [addTransactionThunk.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    [deleteTransactionThunk.pending]: state => {
      state.isLoading = true;
    },
    [deleteTransactionThunk.fulfilled]: (state, { payload }) => {
      state.isLoading = false;

      state.transactions = state.transactions.filter(
        item => item.id !== payload
      );
    },
    [deleteTransactionThunk.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    [editTransactionThunk.pending]: state => {
      state.isLoading = true;
    },
    [editTransactionThunk.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      const removedItemArr = state.transactions.filter(
        item => item.id !== payload.id
      );
      state.transactions = [payload, ...removedItemArr];
    },
    [editTransactionThunk.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    [getSummaryThunk.pending]: state => {
      state.isLoading = true;
    },
    [getSummaryThunk.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.summary = payload;
      state.error = null;
    },
    [getSummaryThunk.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    [getCategoriesThunk.pending]: state => {
      state.isLoading = true;
    },
    [getCategoriesThunk.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.categories = payload;
      state.error = null;
    },
    [getCategoriesThunk.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export const { resetFinance } = financeSlice.actions;
export const financeReducer = financeSlice.reducer;
