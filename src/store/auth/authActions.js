import HttpClient from "../../httpClient";
const nonAuth = HttpClient.nonAuthCall();

export const REGISTER_LOADING = "REGISTER_LOADING";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_ERROR = "REGISTER_ERROR";
export const registerUser = (userInfo) => async (dispatch) => {
  dispatch({ type: REGISTER_LOADING });
  let success = false;

  try {
    const res = await nonAuth.post("/auth/register", userInfo);
    localStorage.setItem("user_token", res.data.token);
    localStorage.setItem("user_id", res.data.user.id);
    dispatch({ type: REGISTER_SUCCESS, payload: res.data });
    success = true;
  } catch (err) {
    dispatch({ type: REGISTER_ERROR, payload: err.response.data });
  } finally {
    return success;
  }
};

export const LOGIN_LOADING = "LOGIN_LOADING";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_ERROR = "LOGIN_FAILURE";
export const loginUser = (userInfo) => async (dispatch) => {
  dispatch({ type: LOGIN_LOADING });
  let success = false;

  try {
    const res = await nonAuth.post("/auth/login", userInfo);
    localStorage.setItem("user_token", res.data.token);
    localStorage.setItem("user_id", res.data.user.id);
    dispatch({ type: LOGIN_SUCCESS, payload: res.data });
    success = true;
  } catch (err) {
    dispatch({ type: LOGIN_ERROR, payload: err.response.data });
  } finally {
    return success;
  }
};

export const LOGOUT = "LOGOUT";
export const logoutUser = () => (dispatch) => {
  localStorage.removeItem("user_token");
  localStorage.removeItem("user_id");
  dispatch({ type: LOGOUT });
};

export const CLEAR_ERROR = "CLEAR_ERROR";
export const clearError = () => ({ type: CLEAR_ERROR });
