import { TodoAction } from './../../types/todo';
import { UserActions } from "../../hook/useAction"
import { TodoState,TodoActionTypes} from "../../types/todo"

const initialState: TodoState = {
    todos: [],
    loading: false,
    error: null,
    page: 1,
    limit: 10
}

export const todoReducer = (state = initialState, action:TodoAction):TodoState => {
switch(action.type){
    case TodoActionTypes.FETCH_TODOS:
        return {...state, loading:true}
        case TodoActionTypes.FETCH_TODOS_SUCCESS:
        return {...state, loading:false, todos: action.payload}
        case TodoActionTypes.FETCH_TODOS_ERROR:
        return {...state, loading:false, error: action.payload}
        case TodoActionTypes.FETCH_TODO_PAGE:
        return {...state, page: action.payload}

    default:
        return state
}
}