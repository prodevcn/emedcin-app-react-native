// import AsyncStorage from '@react-native-community/async-storage';
import GLOBAL from '../constants/Globals';
import {FETCH_HOME} from '../constants/actions';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

function fetchHomeSuccess(data) {
  return {
    type: FETCH_HOME.SUCCESS,
    payload: data,
  };
}

export function login(email, password) {
  return (dispatch) =>
    new Promise((resolve, reject) => {
      const params = {email: email, password: password};
      const url = GLOBAL.BASE_URL + 'user/login';
      axios
        .post(url, params, {headers: {'Content-Type': 'application/json'}})
        .then((response) => {
          if (response.data.msg) {
            resolve(response.data);
          } else {
            if (response.data.role === 'patient') {
              response.data.avatar = GLOBAL.DEFAULT_PATIENT_AVATAR;
            } else {
              response.data.avatar = GLOBAL.DEFAULT_DOCTOR_AVATAR;
            }
            dispatch(fetchHomeSuccess(response.data));
            AsyncStorage.setItem('userInfo', JSON.stringify(response.data))
              .then(() => {
                resolve({msg: 'login success'});
              })
              .catch((err) => {
                console.error(err);
              });
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
}

export function register(userInfo) {
  return (dispatch) =>
    new Promise((resolve, reject) => {
      const params = userInfo;
      const url = GLOBAL.BASE_URL + 'user/register';
      axios
        .post(url, params, {headers: {'Content-Type': 'application/json'}})
        .then((response) => {
          if (response.data.msg) {
            resolve(response.data);
          } else {
            if (userInfo.role === 'patient') {
              userInfo.avatar = GLOBAL.DEFAULT_PATIENT_AVATAR;
              userInfo.imageURL =
                'https://firebasestorage.googleapis.com/v0/b/emedcin.appspot.com/o/default_patient_avatar.png?alt=media&token=ceec8c10-0dc4-4c46-87da-95e0b36641e7';
              // console.log(response.data);
            } else {
              userInfo.avatar = GLOBAL.DEFAULT_DOCTOR_AVATAR;
              userInfo.imageURL =
                'https://firebasestorage.googleapis.com/v0/b/emedcin.appspot.com/o/default_doctor_avatar.png?alt=media&token=14211720-0de0-46c5-9693-3e9facb9b492';
              // console.log(response.data);
            }
            dispatch(fetchHomeSuccess(userInfo));
            AsyncStorage.setItem('userInfo', JSON.stringify(userInfo))
              .then(() => {
                resolve({msg: 'signup success'});
              })
              .catch((err) => {
                console.error(err);
              });
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
}
