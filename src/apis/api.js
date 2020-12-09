import axios from "axios";

const apis = axios.create({
    baseURL: "https://5fd06b941f2374001663188d.mockapi.io/api/"
})

export default apis;