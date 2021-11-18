<template>
  <div class="" id="dasboard">
    <div class="vh-100">
      <div class="p-0 bg--primary h-75">
        <BaseChart />
      </div>

      <div class="container mt-5 px-5">
        <div class="text-center">
          <p
            class="
              text-uppercase
              bg-secondary
              text-white
              d-inline
              px-3
              py-2
              fs--7
            "
          >
            Activity log
          </p>
        </div>

        <button @click="createConnection">Start</button>
        <button @click="disconnect">Stop</button>
        <div class="d-flex justify-content-center mt-4">
          <b-table
            :fields="fields"
            borderless
            hover
            :items="dataPip.slice(dataPip.length - 4, -1)"
          ></b-table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BaseChart from "../../components/chart/_baseChart.vue";
export default {
  name: "Dashboard",
  components: {
    BaseChart,
  },
  data() {
    return {
      sseState: {},
      dataPip: [],
      sseErrros: null,
      fields: ["first_name", "last_name", "status"],
    };
  },
  methods: {
    disconnect() {
      this.sseState.close();
    },
    createConnection() {
      this.sseState = new EventSource(
        "http://localhost:8000/local-customer-sync"
      );
      this.sseState.onmessage = (event) => {
        const convertedData = JSON.parse(event.data);
        // console.log(convertedData)
        this.dataPip.push(convertedData);
        // console.log(event.data);
      };

      this.sseState.onerror = (event) => {
        this.sseErrros = event.data;
      };

      this.sseState.addEventListener("msg", (event) => {
        // this.sseErrros = event.data;
        console.log(event.data);
      });
    },
  },
  mounted() {
    // this.createConnection();
  },
  destroyed() {
    this.sseState.close();
  },
};
</script>

<style lang="scss" scoped>
.bg--primary {
  background-color: #293d5e;
  max-height: 10em;
  min-height: 10em;
}
</style>
