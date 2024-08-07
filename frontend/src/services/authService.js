import axios from 'axios';

const API_URL = 'http://localhost:8000/auth/';

const register = (username, password, image) => {
  let formData = new FormData();
  formData.append('username', username);
  formData.append('password', password);
  formData.append('image', image);
  return axios.post(API_URL + 'users/', formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  });
};

const login = (username, password) => {
  return axios.post(API_URL + 'jwt/create/', {
    username,
    password
  })
  .then(response => {
    if (response.data.access) {
      localStorage.setItem('user', JSON.stringify(response.data));
    }
    return response.data;
  });
};

const logout = () => {
  localStorage.removeItem('user');
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem('user'));
};

export default {
  register,
  login,
  logout,
  getCurrentUser,
};
