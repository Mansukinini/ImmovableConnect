import axios from 'axios';
import { setAlert } from './alert';
import { REGISTER_SUCESS, REGISTER_FAIL, LOGIN_SUCESS, LOGIN_FAIL, USER_LOADED, AUTH_ERROR } from './types';
import setAuthToken from '../utils/setAuthToken';


// Load User
export const loadUser = () => async dispatch => {
    if (localStorage.token) {
        setAuthToken(localStorage.token);
    }

    try {
        const res = await axios.get('http://localhost:3000/api/auth');
        console.log(res);
        dispatch({ type: USER_LOADED, payload: res.data });
    } catch (error) {
        dispatch({ type: AUTH_ERROR });
    }
}

// Register User
export const register = ({ name, email, password }) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    
    const body = JSON.stringify({ name, email, password });

    try {
        const res = await axios.post('http://localhost:3000/api/user', body, config);

        dispatch({ type: REGISTER_SUCESS, payload: res.data });
        dispatch(loadUser());
    } catch (error) {
        const errors = error.response.errors;

        if (errors) errors.array.forEach(error => dispatch(setAlert(error.msg, 'danger')));

        dispatch({ type: REGISTER_FAIL });
    }
}

// Login User
export const login = ({ email, password }) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    
    const body = JSON.stringify({ email, password });

    try {
        const res = await axios.post('http://localhost:3000/api/auth', body, config);

        dispatch({ type: LOGIN_SUCESS, payload: res.data });
        dispatch(loadUser());
    } catch (error) {
        const errors = error.response.errors;

        if (errors) errors.array.forEach(error => dispatch(setAlert(error.msg, 'danger')));

        dispatch({ type: LOGIN_FAIL });
    }
}