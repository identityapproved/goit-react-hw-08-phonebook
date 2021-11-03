import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { currentAuthApi, logInApi, logOutApi, signUpApi } from 'services/AuthAPI';

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
      const { data } = signUpApi(credentials);
      token.set(data.token);
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const logIn = createAsyncThunk('auth/logIn', async (credentials, { rejectWithValue }) => {
  try {
    const { data } = logInApi(credentials);
    token.set(data.token);
  } catch (error) {
    return rejectWithValue(error);
  }
});

export const logOut = createAsyncThunk('auth/logOut', async (_, { rejectWithValue }) => {
  try {
    await logOutApi();
    token.unset();
  } catch (error) {
    return rejectWithValue(error);
  }
});

export const isCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, { getState, rejectWithValue }) => {
    const state = getState();
    const currentToken = state.auth.token;

    if (currentToken === null) {
      return rejectWithValue();
    }

    token.set(currentToken);
    try {
      const { data } = await currentAuthApi();
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);
