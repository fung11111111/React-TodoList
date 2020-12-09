import { CREATE, TOGGLE_DONE, DELETE_ITEM, INIT_TODOS} from "./actionTypes"

export const create = (todoTask) => {
    return {
        type: CREATE,
        payload: todoTask
    }
}

export const toggleDone = (id) => {
    return {
        type: TOGGLE_DONE,
        payload: id
    }
}

export const deleteItem = (id) => {
    return {
        type: DELETE_ITEM,
        payload: id
    }
}

export const initTodoList = todos => {
    return {
        type: INIT_TODOS,
        payload: todos
    }
}