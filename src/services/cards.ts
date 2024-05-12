import axios from "axios";


const baseURL = "https://monkfish-app-z9uza.ondigitalocean.app/bcard2/cards";


export const getCards = () => axios.get(baseURL); 
export const getCardById = (id: string) => axios.get(baseURL + `/${id}`); 
