import { axiosWithAuth } from '../../utils/axiosWithAuth';
import { useParams } from 'react-router-dom'

// REGISTER USER // 
export const REGISTER_USER = 'REGISTER_USER'

export const registerUser = (user, props) => dispatch => {

    axiosWithAuth()
    .post('/auth/register', user)
    .then(res => {
        dispatch({ type: REGISTER_USER, payload: res.data, id: res.data.user.id })
        props.history.push(`/dashboard/${res.data.user.id}`)
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
        dispatch({ type: LOGIN_USER, payload: res.data, id: res.data.id })
        props.history.push(`/dashboard/${res.data.user.id}`)
        
    })
    .catch(err => dispatch({ type: GENERATE_ERROR, payload: err.data, }))
}

// LOG OUT USER //
export const LOGOUT_USER = 'LOGOUT_USER'

export const logoutUser = (props) => (dispatch) => {
    dispatch({ type: LOGOUT_USER });
    
};

export const GET_TODO_SUCCESS = 'GET_TODO_SUCCESS'

export const getTasks = (userId) => dispatch =>{
    
    const userId = localStorage.getItem('userId')
    axiosWithAuth().get(`/todo/${userId}/tasks`)
    .then(res => {
        console.log(res);
        dispatch({ type: GET_TODO_SUCCESS, payload: res.data, userId: res.data.user.id})
        console.log(userId);
    })
    .catch(err => dispatch({ type: GENERATE_ERROR, payload: err }))

}

export const ADD_TODO_SUCCESS = 'ADD_TODO_SUCCESS'

export const addTodo = (input) => dispatch => {
    const {id} = useParams();

    axiosWithAuth()
    .post(`/todo/${id}/add`, input)
    .then(res => {
        console.log(res);
        dispatch({ type:ADD_TODO_SUCCESS, payload: res.data })
    })
    .catch(err => dispatch({ type: GENERATE_ERROR, payload: err}))
}

export const CLEAR_COMPLETED = 'CLEAR_COMPLETED'

export const clearCompleted = () => dispatch => {
    dispatch({ type: CLEAR_COMPLETED })
}

export const TOGGLE_TODO = 'TOGGLE_TODO'

export const toggleTodo = () => dispatch => {
    dispatch({ type: TOGGLE_TODO })
}

// EDIT TODO  //
export const EDIT_TODO_SUCCESS = 'EDIT_TODO_SUCCESS'

//  DELETE TODO //
export const DELETE_TODO_SUCCESS = 'DELETE_TODO_SUCCESS'


// ERROR MESSAGE // 
export const GENERATE_ERROR = 'GENERATE_ERROR'

export const setError = (errorMessage) => (dispatch) => {
    dispatch({ type: GENERATE_ERROR, payload: errorMessage });
}


export const CLEAR_ERROR = 'CLEAR_ERROR'
// CLEAR AN ERROR MESSAGE //
export const clearError = () => (dispatch) => {
    dispatch({ type: CLEAR_ERROR, payload: null})
} 