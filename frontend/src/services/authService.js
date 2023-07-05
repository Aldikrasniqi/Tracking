import axios from 'axios';

const API_URL = 'api/users/';

// register user function
const register = async (userData) => {
  // send the request to server
  const response = await axios.post(API_URL, userData);

  //   check if the response is successful
  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data));
  }
  return response.data;
};
// login user function
const login = async (userData) => {
  // send the request to the server
  const respose = await axios.post(API_URL + 'login', userData);

  //   check if the response is successful
  if (respose.data) {
    localStorage.setItem('user', JSON.stringify(respose.data));
  }
  return respose.data;
};
// logout user function
const logout = () => {
  localStorage.removeItem('user');
};

const authService = {
  register,
  login,
  logout,
};

export default authService;
