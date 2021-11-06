import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const registration = createAsyncThunk(
  'auth/registration',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('users/signup', credentials);
      console.log('~ data', data);
      token.set(data.token);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const logIn = createAsyncThunk('auth/login', async (credentials, { rejectWithValue }) => {
  try {
    const { data } = await axios.post('users/login', credentials);
    token.set(data.token);
    return data;
  } catch (error) {
    return rejectWithValue(error);
  }
});

export const logOut = createAsyncThunk('auth/logout', async (_, { rejectWithValue }) => {
  try {
    await axios.post('users/logout');
    token.unset();
  } catch (error) {
    return rejectWithValue(error);
  }
});

export const fetchCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, { getState, rejectWithValue }) => {
    const state = getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return rejectWithValue();
    }

    token.set(persistedToken);
    try {
      const { data } = await axios.get('users/current');
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);
