import axios from 'axios';

const API_URL = 'http://localhost:3000/';

const login = (email, password) => {
  return axios.post(`${API_URL}/sign_in`, {email, password}).then(response => {
    if (response.data.token) {
      console.log(response.data.token);
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
  login,
  logout,
  getCurrentUser,
};
