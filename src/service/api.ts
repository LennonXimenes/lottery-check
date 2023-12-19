import axios from "axios";

const createApi = () => {
    return axios.create({
        baseURL: "https://loteriascaixa-api.herokuapp.com/api",
        timeout: 8000
    })
}

export const api = createApi();