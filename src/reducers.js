import { combineReducers } from 'redux';
import { CREATE, TOGGLE_DONE, DELETE_ITEM, INIT_TODOS } from './actionTypes';

const todoList = (state = [], action) => {
    if (action.type === CREATE) {
        return state.concat([action.payload])
    } else if (action.type === TOGGLE_DONE) {
        return state.map(item => item.id === action.payload.id ? action.payload : item);
    } else if (action.type === DELETE_ITEM) {
        return state.filter(item => {
            return item.id !== action.payload
    })
    } else if(action.type === INIT_TODOS){
        return action.payload
    }
    return state
}

export default combineReducers({
    todoList
});
