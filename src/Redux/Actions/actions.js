import { axiosWithAuth } from '../../utils/axiosWithAuth';


// REGISTER USER // 
export const REGISTER_USER = 'REGISTER_USER'

export const registerUser = (user, props) => dispatch => {

    axiosWithAuth()
    .post('/auth/register', user)
    .then(res => {
        dispatch({ type: REGISTER_USER, payload: res.data, id: res.data.id })
        console.log(res.data);
        props.history.push(`/dashboard/${res.data.user.id}`)
    })
    .catch(err =>
    dispatch({ type: GENERATE_ERROR, payload: err.data}))
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

// GET ALL TASKs FOR USER //
export const GET_TASK_SUCCESS = 'GET_TASK_SUCCESS'

export const getTasks = (props) => dispatch =>{
    
    const id = localStorage.getItem('userId')
    
    axiosWithAuth().get(`/todo/${id}/tasks`)
    .then(res => {

        dispatch({ type: GET_TASK_SUCCESS, payload: res.data})
        props.history.push(`/dashboard/${res.data.user.id}`)
    })
    .catch(err => dispatch({ type: GENERATE_ERROR, payload: err }))

}

// GET INDIVIDUAL TASK BY ID //
export const GET_TASKID_SUCCESS = 'GET_TASKID_SUCCESS'

export const getTaskID = (taskId) => dispatch =>{
    
    const id = localStorage.getItem('userId')

    axiosWithAuth().get(`/todo/${id}/tasks/${taskId}`, taskId)
    .then(res =>{
        dispatch({ type: GET_TASKID_SUCCESS, payload: res.data })
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
        dispatch({ type:ADD_TODO_SUCCESS, payload: res.data })
    })
    .catch(err => dispatch({ type: GENERATE_ERROR, payload: err}))
}


// EDIT TODO  //
export const EDIT_TODO_SUCCESS = 'EDIT_TODO_SUCCESS'

export const editTaskId = (task) => dispatch => {

    const id = localStorage.getItem('userId');
    console.log(task.id);
    axiosWithAuth().put(`/todo/${id}/tasks/${task.id}`, task)
    .then(res => {

        dispatch({type: EDIT_TODO_SUCCESS, payload: res.data.body})
        
    })
    .catch(err => dispatch({ type: GENERATE_ERROR }))
}

//  DELETE TODO //
export const DELETE_TODO_SUCCESS = 'DELETE_TODO_SUCCESS'

export const deleteTask = (deleteTask) => dispatch => {

    const id = localStorage.getItem('userId')

    axiosWithAuth().delete(`/todo/${id}/tasks/${deleteTask}`)
    .then(res => {
        console.log(res);
        dispatch({type: DELETE_TODO_SUCCESS, payload: deleteTask})
    })
    .catch(err => dispatch({type: GENERATE_ERROR }))
}


// ERROR MESSAGE // 
export const GENERATE_ERROR = 'GENERATE_ERROR'

export const setError = (errorMessage) => (dispatch) => {
    dispatch({ type: GENERATE_ERROR, payload: errorMessage });
}

