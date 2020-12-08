import { combineReducers } from 'redux';
import { CREATE, TOGGLE_DONE, DELETE_ITEM } from './actionTypes';

import { v4 as uuidv4 } from 'uuid';

const todoList = (state = [], action) => {
    if (action.type === CREATE) {
        let newTodoItem = {
            id: uuidv4(),
            text: action.payload,
            done: false
        }
        return state.concat([newTodoItem]);
    } else if (action.type === TOGGLE_DONE) {
        let itemIdx = state.map(function (item) { return item.id; }).indexOf(action.payload);
        state[itemIdx].done = !state[itemIdx].done;
        return state;
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
