import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const signUpApi = async credentials => {
  try {
    const response = await axios.post('/users/signup', credentials);
    return response;
  } catch (error) {
    throw new Error(error);
  }
};

export const logInApi = async credentials => {
  try {
    const response = await axios.post('/users/login', credentials);
    return response;
  } catch (error) {
    throw new Error(error);
  }
};

export const logOutApi = async id => {
  try {
    const response = await axios.post('/users/logout');
    return response;
  } catch (error) {
    throw new Error(error);
  }
};

export const currentAuthApi = async id => {
  try {
    const response = await axios.get('/users/current');
    return response;
  } catch (error) {
    throw new Error(error);
  }
};
