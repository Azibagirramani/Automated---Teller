import Axios from "axios";

const productionUrl = "https://dotmac-fastapi-backend.herokuapp.com/";

const instance = Axios({
  baseURL: productionUrl,
  timeout: 1000,
});

export default instance;
