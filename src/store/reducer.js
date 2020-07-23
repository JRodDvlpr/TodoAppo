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
    error: ''
}

export const reducer = (state = initialState, action) => {

    console.log(action)
    switch (action.type) {

        case LOGIN_SUCCESS:
        return {
            ...state,
            user: action.payload,
        };

        case LOGIN_ERROR:
            return {
            ...state,
            error: action.payload,
            
        };

        case REGISTER_START:
            return {
              ...state,
    
            };

        case REGISTER_SUCCESS:
        return {
            ...state,
            user: action.payload,
        };

        case REGISTER_ERROR:
            console.log(error);
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