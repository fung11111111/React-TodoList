import { CREATE, UPDATETODO, DELETE_ITEM, INIT_TODOS, CREATE_LABEl} from "./actionTypes"

export const create = (todoTask) => {
    return {
        type: CREATE,
        payload: todoTask
    }
}

export const updateTodo = (item) => {
    return {
        type: UPDATETODO,
        payload: item
    }
}

export const deleteItem = () => {
    return {
        type: DELETE_ITEM,
    }
}

export const initTodoList = todos => {
    return {
        type: INIT_TODOS,
        payload: todos
    }
}

export const create_label = (label) => {
    return {
        type: CREATE_LABEl,
        payload: label
    }
}