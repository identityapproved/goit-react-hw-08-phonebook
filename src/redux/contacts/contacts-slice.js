import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './contacts-operations';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    filter: '',
    isLoading: false,
    error: null,
  },
  reducers: {
    changeFilter: (state, { payload }) => {
      state.filter = payload;
    },
  },
  extraReducers: {
    [fetchContacts.fulfilled]: (state, { payload }) => {
      state.items = payload;
      state.isLoading = null;
      state.error = null;
    },
    [fetchContacts.pending]: state => {
      state.isLoading = true;
    },
    [fetchContacts.rejected]: state => {
      state.isLoading = null;
      state.error = 'error';
    },

    [addContact.fulfilled]: (state, { payload }) => {
      state.items = [payload, ...state.items];
      state.isLoading = null;
      state.error = null;
    },
    [addContact.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [addContact.rejected]: state => {
      state.isLoading = null;
      state.error = 'error';
    },

    [deleteContact.fulfilled]: (state, { payload }) => {
      state.items = state.items.filter(contact => contact.id !== payload);
    },
    [deleteContact.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [deleteContact.rejected]: state => {
      state.isLoading = null;
      state.error = 'error';
    },
  },
});

export const { changeFilter } = contactsSlice.actions;

export default contactsSlice.reducer;
