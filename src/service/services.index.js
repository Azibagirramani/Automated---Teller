import Vue from "vue";
import Axois from "../plugins/axiosInstance";
import Endpoints from "../service/service.endpoints";
import Authenticate from "./authentication";
import Customers from "./service.customers";
import Stats from "./service.stats";
import Transaction from "./service.transactions";
import LocalStorage from "./service.localStorage";

const authenticate = new Authenticate(Axois, Endpoints);

const localStorage = new LocalStorage();

const customers = new Customers(Axois, Endpoints);

const transactions = new Transaction(Axois, Endpoints);

const stats = new Stats(Axois, Endpoints);
// Authentication service class registration
Vue.prototype.$AuthService = authenticate;

// LocalStorage service class registration
Vue.prototype.$LocalStorage = localStorage;

// Customer service class registration
Vue.prototype.$CustomerService = customers;

Vue.prototype.$Stats = stats;

Vue.prototype.$Transaction = transactions;
