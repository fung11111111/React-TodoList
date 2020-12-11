import { combineReducers } from 'redux';
import { CREATE, UPDATETODO, INIT_TODOS, CREATE_LABEl, INIT_LABEL, DELETE_ITEM, DELETE_LABEl } from './actionTypes';

const todoList = (state = [], action) => {
    if (action.type === CREATE) {
        return state.concat([action.payload])
    } else if (action.type === UPDATETODO) {
        return state.map(item => item.id === action.payload.id ? action.payload : item);
    } else if (action.type === INIT_TODOS) {
        return action.payload
    } else if (action.type === DELETE_ITEM){
        return state.filter(item => item.id !== action.payload);
    }
    return state
}


const labels = (state = [], action) => {
    if (action.type === INIT_LABEL) {
        return action.payload;
    } else if (action.type === CREATE_LABEl) {
        return state.concat([action.payload])
    } else if   (action.type === DELETE_LABEl){
        return state.filter(label => label.id !== action.payload);
    }

    return state;
}

export default combineReducers({
    todoList, labels
});
