import axios from "axios"

export const getCoins = () => {
    return axios.get("https://api.coinstats.app/public/v1/coins").then(response => response.data);
}

export const getArticles = () => {
    return axios.get("https://api.coinstats.app/public/v1/news").then(response => response.data);
}