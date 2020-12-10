import apis from "./api";

export const getLabels = () => {
    return apis.get("/labels");
};

export const createLabel = (content, color) => {
    return apis.post("/labels", {
        content,
        color
    });
}