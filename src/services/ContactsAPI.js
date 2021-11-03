import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const fetchContactsApi = async () => {
  try {
    const response = await axios.get('/contacts');
    return response;
  } catch (error) {
    throw new Error(error);
  }
};

export const addContactApi = async newContact => {
  try {
    const response = await axios.post('/contacts', newContact);
    return response;
  } catch (error) {
    throw new Error(error);
  }
};

export const deleteContactApi = async id => {
  try {
    const response = await axios.delete(`/contacts/${id}`);
    return response;
  } catch (error) {
    throw new Error(error);
  }
};
