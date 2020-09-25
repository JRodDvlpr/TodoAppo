import { 
    LOGIN_USER,
    REGISTER_USER,
    LOGOUT_USER,
    GET_TASK_SUCCESS,
    ADD_TODO_SUCCESS,
    EDIT_TODO_SUCCESS,
    DELETE_TODO_SUCCESS,
    GENERATE_ERROR


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

        // LOGIN USER //
        case LOGIN_USER:
        localStorage.setItem('token', action.payload.token)
        localStorage.setItem('userId', action.payload.user.id)

        return {
            ...state,
           user: action.payload,
           userId: [action.payload.user.id],
           isLoggedIn: true,

        };


        // REGISTER USER //
        case REGISTER_USER:
        localStorage.setItem('token', action.payload.token)
        localStorage.setItem('userId', action.payload.user.id)
        
        return {
            ...state,
            user: action.payload,
            userId: action.payload.user.id,
            isLoggedIn: true,

           
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
            isLoading: false
        }

        // ADD TASK FOR USER //

        case ADD_TODO_SUCCESS:
        return {
            ...state,
            taskList: [...state.taskList, action.payload],
        }

            
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

    default: 
        return state;
    }

}


