import { axiosWithAuth } from '../../utils/axiosWithAuth';


// REGISTER USER // 
export const REGISTER_USER = 'REGISTER_USER'

export const registerUser = (user, props) => dispatch => {

    axiosWithAuth()
    .post('/auth/register', user)
    .then(res => {
        dispatch({ type: REGISTER_USER, payload: res.data, id: res.data.user.id, token: res.data.token })
        props.history.push(`/dashboard`)
    })
    .catch(err =>
    dispatch({ errorMessage: GENERATE_ERROR, error: err.message}))
}


// LOGIN USER //
export const LOGIN_USER = 'LOGIN_USER'

export const loginUser = (signIn, props) => dispatch => {

    axiosWithAuth()
    .post('/auth/login', signIn)
    .then(res => {
        console.log(res);
        dispatch({ type: LOGIN_USER, payload: res.data, id: res.data.id, token: res.data.token })
        
    })
    .catch(err => dispatch({ type: GENERATE_ERROR, payload: err.data, }))
}


export const GET_TODOLIST_SUCCESS = 'GET_TODOLIST_SUCCESS'
export const GET_TODO_SUCCESS = 'GET_TODO_SUCCESS'
export const ADD_TODO_SUCCESS = 'ADD_TODO_SUCCESS'
export const EDIT_TODO_SUCCESS = 'EDIT_TODO_SUCCESS'
export const DELETE_TODO_SUCCESS = 'DELETE_TODO_SUCCESS'

// ERROR MESSAGE // 
export const GENERATE_ERROR = 'GENERATE_ERROR'
export const CLEAR_ERROR = 'CLEAR_ERROR'