import Vue from "vue";
import Axois from "../plugins/axiosInstance";
import Endpoints from "../service/service.endpoints";
import Authenticate from "./authentication";

const authenticate = new Authenticate(Axois, Endpoints);

// Authentication service class registration
Vue.prototype.$AuthService = authenticate;
