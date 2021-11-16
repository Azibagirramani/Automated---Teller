import Axios from "axios";

const productionUrl = "https://dotmac-fastapi-backend.herokuapp.com/";

const instance = Axios.create({
  baseURL: productionUrl,
});

export default instance;
