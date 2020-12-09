import { combineReducers } from 'redux';
import { CREATE, TOGGLE_DONE, DELETE_ITEM } from './actionTypes';

import { v4 as uuidv4 } from 'uuid';

const todoList = (state = [], action) => {
    if (action.type === CREATE) {
        return state.concat([action.payload]);
    } else if (action.type === TOGGLE_DONE) {
        return state.map(item => item.id === action.payload ? {...item, done: !item.done } : item);
    } else if (action.type === DELETE_ITEM) {
        return state.filter(item => {
            return item.id !== action.payload
        });
    }
    return state
}

export default combineReducers({
    todoList
});
