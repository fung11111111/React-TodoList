import apis from "./api";

export const getTodoList = () => {
    return apis.get("/todos");
};

