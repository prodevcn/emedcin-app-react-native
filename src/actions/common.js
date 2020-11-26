import GLOBAL from '../constants/Globals';
import {FETCH_COMMON, SET_CONNECT, GET_CONNECTIONS} from '../constants/actions';
import axios from 'axios';
// import AsyncStorage from '@react-native-community/async-storage';
function fetchCommon(data) {
  return {
    type: FETCH_COMMON.SUCCESS,
    payload: data,
  };
}
function _setConnect(data) {
  return {
    type: SET_CONNECT.SUCCESS,
    payload: data,
  };
}
function _getConnections(data) {
  return {
    type: GET_CONNECTIONS.SUCCESS,
    payload: data,
  };
}
export function getCommon() {
  let url = GLOBAL.BASE_URL + 'common/all';
  return (dispatch) => {
    axios
      .get(url)
      .then((response) => {
        dispatch(fetchCommon(response.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
}
export function setConnect(senderId, senderRole, receiverId, receiverRole) {
  let url = GLOBAL.BASE_URL + 'common/set_connect';
  let params = {
    senderId: senderId,
    senderRole: senderRole,
    receiverId: receiverId,
    receiverRole: receiverRole,
  };
  return (dispatch) => {
    axios
      .post(url, params)
      .then((response) => {
        // console.log(response.data);
        dispatch(_setConnect(response.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
}
export function getConnections(userInfo) {
  let url = GLOBAL.BASE_URL + 'common/get_connections';
  return (dispatch) => {
    axios
      .post(url, userInfo)
      .then((response) => {
        dispatch(_getConnections(response.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
}
