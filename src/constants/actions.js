const REQUEST = 'REQUEST';
const SUCCESS = 'SUCCESS';
const FAILURE = 'FAILURE';
function createRequestTypes(base) {
  const requestType = {};
  [REQUEST, SUCCESS, FAILURE].forEach((type) => {
    requestType[type] = `${base}_${type}`;
  });
  return requestType;
}

export const FETCH_HOME = createRequestTypes('FETCH_HOME');
export const FETCH_COMMON = createRequestTypes('FETCH_COMMON');
export const SET_CONNECT = createRequestTypes('SET_CONNECT');
export const GET_CONNECTIONS = createRequestTypes('GET_CONNECTIONS');
export const UPDATE_AVATAR = createRequestTypes('UPDATE_AVATAR');
export const UPDATE_PATIENT = createRequestTypes('UPDATE_PATIENT');
