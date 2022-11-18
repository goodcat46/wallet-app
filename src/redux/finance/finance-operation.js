import { createAsyncThunk } from '@reduxjs/toolkit';
import { userApi } from 'constans/constans';
import { toast } from 'react-toastify';
import { toastOptions } from 'constans/constans';

export const getTransactionsThunk = createAsyncThunk(
  'finance/allTransactions',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await userApi.get('transactions');
      return data;
    } catch (error) {
      toast(error.message, {
        toastOptions,
      });
      return rejectWithValue(error.message);
    }
  }
);

export const addTransactionThunk = createAsyncThunk(
  'finance/addTransaction',
  async (transaction, { rejectWithValue }) => {
    try {
      const { data } = await userApi.post('transactions', transaction);
      return data;
    } catch (error) {
      toast(error.message, {
        toastOptions,
      });
      return rejectWithValue(error.message);
    }
  }
);

export const deleteTransactionThunk = createAsyncThunk(
  'finance/deleteTransaction',
  async (id, { rejectWithValue }) => {
    try {
      await userApi.delete(`transactions/${id}`);
      return id;
    } catch (error) {
      toast(error.message, {
        toastOptions,
      });
      return rejectWithValue(error.message);
    }
  }
);

export const editTransactionThunk = createAsyncThunk(
  'finance/editTransaction',
  async ({ id, transaction }, { rejectWithValue }) => {
    try {
      const { data } = await userApi.patch(`transactions/${id}`, transaction);
      return data;
    } catch (error) {
      toast(error.message, {
        toastOptions,
      });
      return rejectWithValue(error.message);
    }
  }
);

export const getSummaryThunk = createAsyncThunk(
  'finance/getSummary',
  async ({ month, year }, { rejectWithValue }) => {
    try {
      const { data } = await userApi.get(
        `transactions-summary?month=${month}&year=${year}`
      );
      return data;
    } catch (error) {
      toast(error.message, {
        toastOptions,
      });
      return rejectWithValue(error.message);
    }
  }
);

export const getCategoriesThunk = createAsyncThunk(
  'finance/getCategories',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await userApi.get('transaction-categories');
      return data;
    } catch (error) {
      toast(error.message, {
        toastOptions,
      });
      rejectWithValue(error.message);
    }
  }
);
