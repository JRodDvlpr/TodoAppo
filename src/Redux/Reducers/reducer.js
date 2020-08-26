import { 
    LOGIN_USER,
    REGISTER_USER,
    LOGOUT_USER,
    GET_TODO_SUCCESS,
    ADD_TODO_SUCCESS,
    TOGGLE_TODO,
    CLEAR_COMPLETED,
    EDIT_TODO_SUCCESS,
    DELETE_TODO_SUCCESS,
    GENERATE_ERROR,
    CLEAR_ERROR


} from '../Actions/actions.js'

const initialState = {

    user: {},
    userId: null,
    tasks: [],
    isLogged: false,
    isUpdating: false,
    error: null,
    isLoading: true,
    isFetching: false
}

const reducer = (state = initialState, action) => {
   
    switch (action.type) {

        case LOGIN_USER:
        localStorage.setItem('token', action.payload.token)
        localStorage.setItem('userId', action.payload.user.id)

        return {
            ...state,
           user: action.payload,
           user_id: action.payload.user.id,
           isLoggedIn: true,
           isLoading: false

        };



        case REGISTER_USER:
        localStorage.setItem('token', action.payload.token)
        localStorage.setItem('userId', action.payload.user.id)
        
        return {
            ...state,
            user: action.payload,
            user_id: action.payload.user.id,
           isLogged: true,
           isLoading: false
           
        };

        case LOGOUT_USER:
			localStorage.removeItem("token");
            localStorage.removeItem("persist:root");
            localStorage.removeItem("userId");
		return { 
            ...state

        }

        case GET_TODO_SUCCESS: 
        return { 
            ...state, 
            tasks: [...action.payload]
        }


        case ADD_TODO_SUCCESS:
        return {
            ...state,
            tasks: [...state.tasks, 
            {
                name: action.payload,
                description: action.payload,
                completed: false,
            },
            ],
        }

        case TOGGLE_TODO:
        return {
            ...state,
            tasks: state.tasks.map(todo => {
                if(action.payload === todo.id) {
                    return {
                        ...todo,
                        completed: !todo.completed,
                    };
                }
                return todo;
            })
        }

        case CLEAR_COMPLETED:
        return {
            ...state,
            tasks: state.tasks.filter(todo => !todo.completed),
        };
        
            

      case EDIT_TODO_SUCCESS:
        return {
            ...state
        }

        case DELETE_TODO_SUCCESS:
        return {
            ...state,
            todo: [...state.todo.filter(todo => todo.id !== action.payload)]
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