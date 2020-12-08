import {combineReducers} from 'redux';
import { CREATE, TOGGLE_DONE } from './actionTypes';

import {v4 as uuidv4} from 'uuid';

const findItemIdxById = (todoList, id) =>{
    for (let i = 0; i < todoList.length; i++) {
            if(id == todoList[i].id){
                return i;
            }
      }
}

const todoList = (state = [], action) =>{
    if(action.type === CREATE){
        let newTodoItem = {
            id: uuidv4(),
            text: action.payload,
            done: false
        }
        return state.concat([newTodoItem]);
    }else if(action.type === TOGGLE_DONE){
        let idx = findItemIdxById(state, action.payload);
        state[idx].done = !state[idx].done;
        return state;
    }
    return state
}

export default combineReducers({
    todoList
});
