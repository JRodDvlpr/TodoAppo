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
    isLoading: false,
    
}

export const reducer = (state = initialState, action) => {
   
    switch (action.type) {

        // LOGIN USER //
        case LOGIN_USER:
        localStorage.setItem('token', action.payload.token)
        localStorage.setItem('userId', action.payload.user.id)

        return {
            ...state,
           user: action.payload,
           userId: action.payload.user.id,
           isLoggedIn: true,
           isLoading: true

        };


        // REGISTER USER //

        case REGISTER_USER:
        localStorage.setItem('token', action.payload.token)
        localStorage.setItem('userId', action.payload.user.id)
        
        return {
            ...state,
            user: action.payload,
            userId: action.payload.user.id,
           isLogged: true,
           isLoading: true
           
        };

        // LOGOUT USER & REMOVE TOKEN //

        case LOGOUT_USER:
			localStorage.removeItem("token");
            localStorage.removeItem("userId");
		return { 
            ...state

        }

        // FETCH TASK FOR USER //

        case GET_TASK_SUCCESS: 
        return { 
            ...state, 
            taskList: [...action.payload],
            isLoading: true
        }

        // ADD TASK FOR USER //

        case ADD_TODO_SUCCESS:
        return {
            ...state,
            taskList: [...state.taskList, action.payload],
        }

        // TOGGLE TASK //
        case TOGGLE_TODO:
            let id = action.payload.data.id;
        return {
            ...state,
            taskList: state.taskList.map(task => {
                if (task.id === id) {
                    return {
                        ...task,
                        completed: !task.completed,
                    };
                }
                return task;
            })
        }

        // CLEAR TASK //
        case CLEAR_COMPLETED:
        return {
            ...state,
            taskList: state.taskList.filter(task => {
                return !task.completed
            }),
        };
        
            
        // EDIT TASK //

        case EDIT_TODO_SUCCESS:
        return {
            ...state
        }

        // DELETE TASK //

        case DELETE_TODO_SUCCESS:
        return {
            ...state,
            taskList: [...state.taskList.filter(task => task.id !== action.payload)]
        }

        // GENERATE GENERAL INCOMING ERROR //

        case GENERATE_ERROR:
        return {
            ...state,
            error: action.payload
        };

        // CLEAR ERROR MESSAGE //

        case CLEAR_ERROR:
        return {
            ...state,
            error: null
        };
        
    default: 
        return state;
    }

}


