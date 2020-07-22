import { axiosWithAuth } from '../utils/axiosWithAuth.js';

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_ERROR = 'LOGIN_ERROR'
export const LOGIN_START = 'LOGIN_START'

export const loginUser = (logIn, props) => dispatch => {
    dispatch({ type: LOGIN_START }) 
    
    axiosWithAuth()
    .post('/auth/login', logIn)
    .then(res => {
        console.log(res);
        // localStorage.setItem('token', res.data.token)
        // localStorage.setItem('user_id', res.data.id)
        dispatch({ type: LOGIN_SUCCESS, payload: res.data, user_id: res.data.id, token: res.data.token})
        props.history.push(`/dashboard/${res.data.id}`)
    })
    .catch(err => dispatch({ type: LOGIN_ERROR, payload: err}))
}

export const REGISTER_START = 'REGISTER_START'
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS'
export const REGISTER_ERROR = 'REGISTER_ERROR'


export const registerUser = (user) => dispatch => {
    dispatch({ type: REGISTER_START})

    axiosWithAuth()
    .post('/auth/register', user)
    .then(res => {
        dispatch({ type: REGISTER_SUCCESS, payload: res.data})
    })
    .catch(err => dispatch({ type: REGISTER_ERROR, payload: err }))
}
export const GET_TODOLIST_SUCCESS = 'GET_TODOLIST_SUCCESS'
export const GET_TODO_SUCCESS = 'GET_TODO_SUCCESS'
export const ADD_TODO_SUCCESS = 'ADD_TODO_SUCCESS'
export const EDIT_TODO_SUCCESS = 'EDIT_TODO_SUCCESS'
export const DELETE_TODO_SUCCESS = 'DELETE_TODO_SUCCESS'