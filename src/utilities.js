import AsyncStorage from '@react-native-community/async-storage';
import client from 'axios';
import GLOBAL from './constants/Globals';

export const CreateAxios = () =>
  new Promise((resolve) => {
    const axios = client.create({
      baseURL: GLOBAL.BASE_URL,
      validateStatus: (status) => status >= 200 && status < 300,
      headers: {'Content-Type': 'application/json'},
    });
    axios.interceptors.response.use(
      (response) => {
        if (!response.data || typeof response.data === 'string') {
          throw {boundaryId: 'fetchResponse', details: response};
        } else if (
          response.data.email === 'Email not found' ||
          response.data.password === 'Password incorrect'
        ) {
          console.log('password error');
          return response;
        } else if (response.data._id) {
          AsyncStorage.setItem('accessToken', 'success');
          console.log(response);
          return response;
        }
      },
      (error) => {
        console.log(error);
        if (error.response ? error.response.status === 401 : false) {
          // AsyncStorage.removeItem('accessToken');
          // window.location = '/account/login';
          console.log('err===========');
          return;
        }
        console.log('err');
        throw {boundaryId: 'fetchResponse', details: error};
      },
    );

    resolve(axios);
  });
