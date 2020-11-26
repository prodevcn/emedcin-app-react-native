import GLOBAL from '../constants/Globals';
import {UPDATE_AVATAR, UPDATE_PATIENT} from '../constants/actions';
import axios from 'axios';
function _updateAvatar(data) {
  return {
    type: UPDATE_AVATAR.SUCCESS,
    payload: data,
  };
}
export function updateAvatar(userInfo) {
  return (dispatch) =>
    new Promise((resolve, reject) => {
      const params = userInfo;
      const url = GLOBAL.BASE_URL + 'user/upload-avatar';
      axios
        .post(url, params, {headers: {'Content-Type': 'application/json'}})
        .then((response) => {
          if (response.data.msg) {
            resolve(response.data);
          } else {
            dispatch(_updateAvatar(userInfo));
            resolve(userInfo);
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
}
function _updatePatient(data) {
  return {
    type: UPDATE_PATIENT.SUCCESS,
    payload: data,
  };
}
export function updatePatient(userInfo) {
  return (dispatch) =>
    new Promise((resolve, reject) => {
      const params = userInfo;
      const url = GLOBAL.BASE_URL + 'user/user-update';
      console.log(userInfo);
      axios
        .post(url, params, {headers: {'Content-Type': 'application/json'}})
        .then((response) => {
          if (response.data.msg) {
            resolve(response.data);
          } else {
            dispatch(_updatePatient(userInfo));
            resolve(userInfo);
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
}
