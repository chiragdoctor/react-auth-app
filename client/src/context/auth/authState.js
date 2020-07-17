import React, { useReducer } from 'react';
import axios from 'axios';
import AuthContext from './authContext';
import authReducer from './authReducer';
import { REGISTER_FAIL, REGISTER_SUCCESS, USER_LOADED, AUTH_ERROR, CLEAR_ERRORS, LOGIN_FAIL, LOGIN_SUCCESS } from '../types';
import setAuthToken from '../../utils/setAuthToken';

const AuthState = (props) => {

  //Initial state for the auth components
  const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    user: null,
    loading: true,
    error: null,
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  const loadUser = async () => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }

    try {
      const res = await axios.get('/api/auth');
      dispatch({
        type: USER_LOADED,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: AUTH_ERROR,
        payload: err.response.data.errMsg,
      });
    }
  };

  const registerStudent = async (formData) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    try {
      const res = await axios.post('/api/student/register', formData, config);
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      });
      loadUser();
    } catch (err) {
      dispatch({
        type: REGISTER_FAIL,
        payload: err.response.data.errMsg,
      });
    }
  };

  const registerFaculty = async (formData) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    try {
      const res = await axios.post('/api/faculty/register', formData, config);
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      });
      loadUser();
    } catch (err) {
      dispatch({
        type: REGISTER_FAIL,
        payload: err.response.data.errMsg,
      });
    }
  };

  const clearErrors = () => {
    dispatch({
      type: CLEAR_ERRORS,
    });
  };

  //Login 

const login = async (formData) => {
   const config = {
			headers: {
				'Content-Type': 'application/json',
			},
   };
  try {
    const res = await axios.post('/api/auth/login', formData, config)
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data
    })
      loadUser();
  } catch (err) {
    dispatch({
			type: LOGIN_FAIL,
			payload: err.response.data.errMsg,
		});
  }
}
  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        user: state.user,
        loading: state.loading,
        error: state.error,
        loadUser,
        registerStudent,
        registerFaculty,
        clearErrors,
        login
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
