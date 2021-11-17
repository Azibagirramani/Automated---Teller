import Vue from "vue";
import VueSSE from "vue-sse";

// baseend point url
import { productionUrl } from "./axiosInstance"

Vue.use(VueSSE, {
  format: "json",
  polyfill: true,
  url: productionUrl,
  withCredentials: false,
});
