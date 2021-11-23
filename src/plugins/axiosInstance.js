import Axios from "axios";

const development = "http://localhost:8000/"
// const production = "https://dotmac-fastapi-backend.herokuapp.com/"
export const productionUrl = development;

export const developmentUrl = "localhost"

const instance = Axios.create({
  baseURL: productionUrl,
});

export default instance;
