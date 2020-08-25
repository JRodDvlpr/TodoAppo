import { 
    LOGIN_USER,
    REGISTER_USER,
    LOGOUT_USER,
    GET_TODOLIST_SUCCESS,
    GET_TODO_SUCCESS,
    ADD_TODO_SUCCESS,
    EDIT_TODO_SUCCESS,
    DELETE_TODO_SUCCESS,
    GENERATE_ERROR,
    CLEAR_ERROR


} from '../Actions/actions.js'

const initialState = {

    user: {},
    isLoggedIn: false,
    isUpdating: false,
    todoList: [],
    error: null,
    isLoading: true
}

const reducer = (state = initialState, action) => {
   
    switch (action.type) {

        case LOGIN_USER:
        localStorage.setItem('token', action.payload.token)
        console.log(action.payload);
        return {
            ...state,
           user: action.payload,
           id: action.payload.id,
           isLoggedIn: true,
           isLoading: false

        };



        case REGISTER_USER:
        localStorage.setItem('token', action.payload.token)
        return {
            ...state,
            user: action.payload,
           user_id: action.payload.id,
           isLoggedIn: true,
           isFetching: true
        };

        case LOGOUT_USER:
			localStorage.removeItem("token");
			localStorage.removeItem("persist:root");
		return { 
            ...state

        }

        case GET_TODOLIST_SUCCESS: 
        return { 
            ...state, 
            todoList: [...action.payload]
        }

        case GET_TODO_SUCCESS: 
        return  {
            ...state,
        }

        case ADD_TODO_SUCCESS:
        return {
            ...state,
            todoList: [...state.todoList, action.payload]
        }

        case EDIT_TODO_SUCCESS:
        return {
            ...state
        }

        case DELETE_TODO_SUCCESS:
        return {
            ...state,
            todoList: [...state.todolist.filter(todo => todo.id !== action.payload)]
        }
        case GENERATE_ERROR:
            return {
                ...state,
                error: action.payload,
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