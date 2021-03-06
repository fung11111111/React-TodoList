import apis from "./api";

export const getTodoList = () => {
    return apis.get("/todos");
};

export const addNewToDo = (text) => {
    return apis.post("/todos", {text});
};

export const deleteToDo = (id) => {
    return apis.delete("/todos/"+ id );
};

export const updateTodo = (id, text, done, options) => {
    return apis.put("/todos/"+ id, {
        text,
        done,
        labels: options
    });
};