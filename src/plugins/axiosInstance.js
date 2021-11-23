import Axios from "axios";

export const productionUrl = "https://dotmac-fastapi-backend.herokuapp.com/";

export const developmentUrl = "localhost"

const instance = Axios.create({
  baseURL: productionUrl,
});

export default instance;
