import { axiosWithAuth } from '../../utils/axiosWithAuth';


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
        dispatch({ type: LOGIN_USER, payload: res.data, id: res.data.id })
        props.history.push(`/dashboard/${res.data.user.id}`)
        
    })
    .catch(err => dispatch({ type: GENERATE_ERROR, payload: err.data, }))
}

// LOG OUT USER -> REMOVES TOKEN & USER_ID //
export const LOGOUT_USER = 'LOGOUT_USER'

export const logoutUser = (props) => (dispatch) => {
    dispatch({ type: LOGOUT_USER });
    
};

// RETRIEVE TASK FOR USER //
export const GET_TASK_SUCCESS = 'GET_TASK_SUCCESS'

export const getTasks = () => dispatch =>{
    
    const id = localStorage.getItem('userId')
    axiosWithAuth().get(`/todo/${id}/tasks`)
    .then(res => {
        dispatch({ type: GET_TASK_SUCCESS, payload: res.data})
    
    })
    .catch(err => dispatch({ type: GENERATE_ERROR, payload: err }))

}

// ADD TASK
export const ADD_TODO_SUCCESS = 'ADD_TODO_SUCCESS'

export const addTodo = (input) => dispatch => {

    const id = localStorage.getItem('userId');
    
    axiosWithAuth()
    .post(`/todo/${id}/add`, input)
    .then(res => {
        console.log(res);
        dispatch({ type:ADD_TODO_SUCCESS, payload: res.data })
    })
    .catch(err => dispatch({ type: GENERATE_ERROR, payload: err}))
}

// CLEAR COMPLETED //
export const CLEAR_COMPLETED = 'CLEAR_COMPLETED'

export const clearCompleted = () => dispatch => {
    dispatch({ type: CLEAR_COMPLETED })
}

// TOGGLE TODO //
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


// CLEAR AN ERROR MESSAGE //
export const CLEAR_ERROR = 'CLEAR_ERROR'

export const clearError = () => (dispatch) => {
    dispatch({ type: CLEAR_ERROR, payload: null})
} 