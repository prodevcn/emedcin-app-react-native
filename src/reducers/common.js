import {
  FETCH_HOME,
  FETCH_COMMON,
  SET_CONNECT,
  GET_CONNECTIONS,
  UPDATE_AVATAR,
  UPDATE_PATIENT,
} from '../constants/actions';
export default function reducer(
  state = {
    userInfo: {},
    error: null,
    doctors: [],
    disconnected_doctors: [],
    patients: [],
    disconnected_patients: [],
    institutions: [],
    disconnected_institutions: [],
    appointments: [],
    posts: [],
    news: [],
    activities: [],
    connections: [],
    connectionNum: 0,
    connect_patient_id: [],
    connect_doctor_id: [],
    connect_institution_id: [],
  },
  action,
) {
  switch (action.type) {
    case FETCH_HOME.REQUEST: {
      return {
        ...state,
        fetching: true,
        fetched: false,
      };
    }
    case FETCH_HOME.FAILURE: {
      return {
        ...state,
        error: action.payload,
      };
    }
    case FETCH_HOME.SUCCESS: {
      return {
        ...state,
        userInfo: action.payload,
      };
    }
    case FETCH_COMMON.SUCCESS: {
      return {
        ...state,
        disconnected_doctors: action.payload.doctors,
        disconnected_patients: action.payload.patients,
        doctors: action.payload.doctors,
        patients: action.payload.patients,
      };
    }
    case SET_CONNECT.SUCCESS: {
      if (action.payload.receiverRole === 'patient') {
        const members = state.disconnected_patients;
        members.map((item, index) => {
          if (item._id === action.payload.receiverId) {
            members.splice(index, 1);
          }
        });
        return {
          ...state,
          disconnected_patients: [...members],
        };
      } else if (action.payload.receiverRole === 'doctor') {
        const members = state.disconnected_doctors;
        members.map((item, index) => {
          if (item._id === action.payload.receiverId) {
            members.splice(index, 1);
          }
        });
        return {
          ...state,
          disconnected_doctors: [...members],
        };
      }
      return {state};
    }
    case GET_CONNECTIONS.SUCCESS: {
      const connect_num =
        action.payload.con_patient_id.length +
        action.payload.con_doctor_id.length +
        action.payload.con_institution_id.length;
      return {
        ...state,
        connectionNum: connect_num,
        connect_patient_id: action.payload.con_patient_id,
        connect_doctor_id: action.payload.con_doctor_id,
        connect_institution_id: action.payload.con_institution_id,
      };
    }
    case UPDATE_AVATAR.SUCCESS: {
      return {
        ...state,
        userInfo: {
          ...state.userInfo,
          imageURL: action.payload.imageURL,
          firstname: action.payload.firstname,
          lastname: action.payload.lastname,
          email: action.payload.email,
          name: action.payload.name,
        },
      };
    }
    case UPDATE_PATIENT.SUCCESS: {
      console.log('akkker', action.payload);
    }
  }
  return state;
}
