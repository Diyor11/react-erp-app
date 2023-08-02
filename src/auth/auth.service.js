import { API_BASE_URL } from '../config/serverApiConfig';

import axios from 'axios';
import errorHandler from '../request/errorHandler';
import successHandler from '../request/successHandler';

export const login = async ({ loginData }) => {
  try {
    const response = await fetch(API_BASE_URL + `/login?timestamp=${new Date().getTime()}`, {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loginData),
    });

    const { status } = response;
    const data = await response.json();

    successHandler(
      { data, status },
      {
        notifyOnSuccess: false,
        notifyOnFailed: true,
      }
    );
    return data;
  } catch (error) {
    return errorHandler(error);
  }
};

export const logout = async () => {
  // axios.defaults.withCredentials = true;
  try {
    window.localStorage.clear();
    await axios.post(API_BASE_URL + `logout?timestamp=${new Date().getTime()}`);
  } catch (error) {
    return errorHandler(error);
  }
};
