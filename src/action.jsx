import { CREATE, TOGGLE_DONE, DELETE_ITEM } from "./actionTypes"

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