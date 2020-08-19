import { 
    LOGIN_USER,
    REGISTER_USER,
    GET_TODOLIST_SUCCESS,
    GET_TODO_SUCCESS,
    ADD_TODO_SUCCESS,
    EDIT_TODO_SUCCESS,
    DELETE_TODO_SUCCESS,
    GENERATE_ERROR,
    CLEAR_ERROR


} from '../Actions/actions.js'

const initialState = {

    username: '',
    user_Id: null,
    isLoggedIn: false,
    isUpdating: false,
    todoList: [],
    error: null,
    isFetching: false
}

const reducer = (state = initialState, {type, payload}) => {


    switch (type) {

        case LOGIN_USER:
        localStorage.setItem('token', payload.token)
        console.log(payload);
        return {
            ...state,
            used_Id: payload.user.id,
            username: payload.user.username,
            isLoggedIn: true,

        };



        case REGISTER_USER:
        localStorage.setItem('token', payload.token)
        return {
            ...state,
            used_Id: payload.user.id,
            username: payload.user.username,
            isLoggedIn: true,
        };



        case GET_TODOLIST_SUCCESS: 
        return { 
            ...state, 
            todoList: [...payload]
        }

        case GET_TODO_SUCCESS: 
        return  {
            ...state,
        }

        case ADD_TODO_SUCCESS:
        return {
            ...state,
            todoList: [...state.todoList, payload]
        }

        case EDIT_TODO_SUCCESS:
        return {
            ...state
        }

        case DELETE_TODO_SUCCESS:
        return {
            ...state,
            todoList: [...state.todolist.filter(todo => todo.id !== payload)]
        }
        case GENERATE_ERROR:
            return {
                ...state,
                error: payload,
                isFetching: false,
            };
        
        case CLEAR_ERROR:
            return {
                ...state,
                error: null,
                isFetching: false,

            };
        
    default: 
        return state;
    }

}

export default reducer;