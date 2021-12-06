import Axios from "axios";

const production = "https://dotmac-fastapi-backend.herokuapp.com/";

export const productionUrl = production;

export const developmentUrl = "http://127.0.0.1:8000/";

const instance = Axios.create({
  baseURL: developmentUrl,
});

export default instance;
