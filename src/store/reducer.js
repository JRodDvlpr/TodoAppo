import { 
    LOGIN_SUCCESS,
    LOGIN_ERROR,
    REGISTER_START,
    REGISTER_SUCCESS,
    REGISTER_ERROR,
    GET_TODOLIST_SUCCESS,
    GET_TODO_SUCCESS,
    ADD_TODO_SUCCESS,
    EDIT_TODO_SUCCESS,
    DELETE_TODO_SUCCESS



} from '../store/actions'

const initialState = {

    user: [],
    todoList: [],
    errorMessage: null
}

export const reducer = (state = initialState, action) => {

    console.log(action)
    switch (action.type) {

        case LOGIN_SUCCESS:
        localStorage.setItem('token', action.payload.token)
        localStorage.setItem('id', action.payload.id)
        return {
            ...state,
            user: action.payload,
        };

        case LOGIN_ERROR:
            return {
            ...state,
            error: true,
            errorMessage: alert("Incorrect Username or Password"),
            
        };

        case REGISTER_START:
            return {
              ...state,
    
            };

        case REGISTER_SUCCESS:
        localStorage.setItem('token', action.payload.token)
        localStorage.setItem('id', action.payload.id)
        return {
            ...state,
            user: action.payload,
        };

        case REGISTER_ERROR:
            
            return {
              ...state,
              error: action.error
              
            };


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
        
    default: 
    return state;
    }

}