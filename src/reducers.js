import {combineReducers} from 'redux';
import { CREATE } from './actionTypes';

import {v4 as uuidv4} from 'uuid';

const todoList = (state = [], action) =>{
    if(action.type === CREATE){
        let newTodoItem = {
            id: uuidv4(),
            text: action.payload,
            done: false
        }
        return state.concat([newTodoItem]);
    }
    return state
}

export default combineReducers({
    todoList
});
