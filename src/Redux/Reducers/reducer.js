import { 
    LOGIN_USER,
    REGISTER_USER,
    LOGOUT_USER,
    GET_TASK_SUCCESS,
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
    taskList: [],
    isLoggedIn: false,
    error: null,
    isLoading: true,
    
}

export const reducer = (state = initialState, action) => {
   
    switch (action.type) {

        case LOGIN_USER:
        localStorage.setItem('token', action.payload.token)
        localStorage.setItem('userId', action.payload.user.id)

        return {
            ...state,
           user: action.payload,
           userId: action.payload.user.id,
           isLoggedIn: true,
           isLoading: false

        };



        case REGISTER_USER:
        localStorage.setItem('token', action.payload.token)
        localStorage.setItem('userId', action.payload.user.id)
        
        return {
            ...state,
            user: action.payload,
            userId: action.payload.user.id,
           isLogged: true,
           isLoading: false
           
        };

        case LOGOUT_USER:
			localStorage.removeItem("token");
            localStorage.removeItem("userId");
		return { 
            ...state

        }

        case GET_TASK_SUCCESS: 
        return { 
            ...state, 
            taskList: [...action.payload]
        }


        case ADD_TODO_SUCCESS:
        return {
            ...state,
            taskList: [...state.taskList, 
            {
                text: action.payload,
                completed: false,
            },
            ],
        }

        case TOGGLE_TODO:
        return {
            ...state,
            taskList: state.taskList.map(task => {
                if(action.payload === task.id) {
                    return {
                        ...task,
                        completed: !task.completed,
                    };
                }
                return task;
            })
        }

        case CLEAR_COMPLETED:
        return {
            ...state,
            taskList: state.taskList.filter(task => !task.completed),
        };
        
            

      case EDIT_TODO_SUCCESS:
        return {
            ...state
        }

        case DELETE_TODO_SUCCESS:
        return {
            ...state,
            taskList: [...state.taskList.filter(task => task.id !== action.payload)]
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


