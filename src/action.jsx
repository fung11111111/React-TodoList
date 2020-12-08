import { CREATE } from "./actionTypes"

export const create = (todoTask) => {
    return{
        type: CREATE,
        payload: todoTask
    }
}