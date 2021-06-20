import {
  REGISTER_LOADING,
  REGISTER_SUCCESS,
  REGISTER_ERROR,
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGOUT,
  CLEAR_ERROR,
} from "./authActions";

const authStore = {
  userId: null,
  username: null,
  isLoggedIn: false,
  isAuthorizing: false,
  errorMessage: null,
  errorStatus: null,
};

const nullError = {
  errorMessage: null,
  errorStatus: null,
};

export const authReducer = (state = authStore, { type, payload }) => {
  switch (type) {
    case REGISTER_LOADING:
      return { ...state, isAuthorizing: true, isLoggedIn: false, ...nullError };
    case REGISTER_SUCCESS:
      return {
        ...state,
        isAuthorizing: false,
        isLoggedIn: true,
        userId: payload.user.id,
        username: payload.user.username,
        ...nullError,
      };
    case REGISTER_ERROR:
      return {
        ...state,
        isAuthorizing: false,
        isLoggedIn: false,
        errorMessage: payload.message,
        errorStatus: payload.status,
      };
    case LOGIN_LOADING:
      return { ...state, isAuthorizing: true, isLoggedIn: false, ...nullError };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuthorizing: false,
        isLoggedIn: true,
        userId: payload.user.id,
        username: payload.user.username,
        ...nullError,
      };
    case LOGIN_ERROR:
      return {
        ...state,
        isAuthorizing: false,
        isLoggedIn: false,
        errorMessage: payload.message,
        errorStatus: payload.status,
      };
    case LOGOUT:
      return { ...authStore };
    case CLEAR_ERROR:
      return { ...state, ...nullError };
    default:
      return state;
  }
};
