import { axiosWithAuth } from '../utils/axiosWithAuth';



export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_ERROR = 'LOGIN_ERROR'
export const LOGIN_START = 'LOGIN_START'

export const loginUser = (signIn, props) => dispatch => {
    dispatch({ type: LOGIN_START }) 

    
    axiosWithAuth()
    .post('/auth/login', signIn)
    .then(res => {
        console.log(res);
        localStorage.setItem('token', res.data.token)
        localStorage.setItem('id', res.data.user_id)
        dispatch({ type: LOGIN_SUCCESS, payload: res.data, id: res.data.id, token: res.data.token })

        // props.history.push(`/dashboard`)
    })
    .catch(err => dispatch({ type: LOGIN_ERROR, payload: err.data, }))
}


export const REGISTER_START = 'REGISTER_START'
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS'
export const REGISTER_ERROR = 'REGISTER_ERROR'

export const registerUser = (user, props) => dispatch => {
    dispatch({ type: REGISTER_START })

    axiosWithAuth()
    .post('/auth/register', user)
    .then(res => {
        dispatch({ type: REGISTER_SUCCESS, payload: res.data, id: res.data.id, token: res.data.token })
        localStorage.setItem('token', res.data.token)
        localStorage.setItem('id', res.data.id)
        props.history.push(`/dashboard`)
    })
    .catch(err =>
    dispatch({type: REGISTER_ERROR }))
}

export const GET_TODOLIST_SUCCESS = 'GET_TODOLIST_SUCCESS'
export const GET_TODO_SUCCESS = 'GET_TODO_SUCCESS'
export const ADD_TODO_SUCCESS = 'ADD_TODO_SUCCESS'
export const EDIT_TODO_SUCCESS = 'EDIT_TODO_SUCCESS'
export const DELETE_TODO_SUCCESS = 'DELETE_TODO_SUCCESS'