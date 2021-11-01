import axios from 'axios';

axios.defaults.baseURL = 'https://61770e9a9c328300175f57bb.mockapi.io/api/v1/';

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
