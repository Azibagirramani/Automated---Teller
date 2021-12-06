<template>
  <div class="m-0 m-0">
    <div class="row">
      <div
        class="col-md-4"
        v-for="(items, index) in syncLabels"
        :key="index"
        @click="check(items)"
      >
        <BaseOverlay :show="loader">
          <BaseCard
            :footer="true"
            :exFooter="'border-0 bg-transparent'"
            :baseExClass="'shadow border-0 card--hover ' + items.bgColor"
          >
            <div>
              <h5 :class="'fw-lighter ' + items.textColor">{{ items.name }}</h5>
              <h1 :class="items.textColor">{{ 75 }}</h1>
            </div>
            <template v-slot:footer>
              <div class="">
                <a href="#" :class="items.textColor">{{ items.sublink }}</a>
              </div>
            </template>
          </BaseCard>
        </BaseOverlay>
      </div>
    </div>

    <div class="content-area mt-5">
      <div class="d-flex justify-content-center" v-if="selectedType === ''">
        <BaseState :icons="'hourglass_disabled'" />
      </div>
      <component :is="selectedType"></component>
    </div>
  </div>
</template>

<script>
import BaseState from "../../../components/partials/_empty.vue";
import BaseOverlay from "../../../components/partials/_overlay.vue";
import BaseCard from "../../../components/partials/_basecard.vue";
import Customers from "../admin-partials/_syncActivities.vue";
import { developmentUrl } from "../../../plugins/axiosInstance";
export default {
  components: {
    BaseCard,
    BaseOverlay,
    Customers,
    BaseState,
  },
  data() {
    return {
      selectedType: "Customers",
      syncLabels: [
        {
          name: "Customers",
          value: 1,
          textColor: "text-white",
          bgColor: "bg-primary",
          type: "customers",
          sublink: "View all",
        },
        {
          name: "Sales Reciepts",
          value: 2,
          textColor: "text-dark",
          bgColor: "bg-white",
          type: "sales",
          sublink: "View all",
        },
        {
          name: "Invoices",
          value: 3,
          textColor: "text-white",
          bgColor: "bg-primary",
          type: "invoice",
          sublink: "View all",
        },
      ],
      overlayLoader: false,
      syncType: "",
      fields: [],
      loader: false,
      overviewContent: {},
      process: 0,
      isLoading: false,
      showSnackbar: false,
      msgLocal: "",
      isDisconnect: false,
      isStart: false,
      isFinish: false,
      content: {
        data: [],
      },
      msg: "",
      sseEvent: null,
    };
  },
  computed: {
    computedCustomers() {
      return this.content.data;
    },
  },
  methods: {
    check(data = "customers") {
      switch (data.type) {
        case "customers":
          this.selectedType = "customers";
          break;
        default:
          this.selectedType = "";
          break;
      }
    },
    // controll modal
    HideModal() {
      this.$refs.baseModalComponentRef.hideModal();
    },
    showModal() {
      if (this.isStart) {
        this.msg = "Please wait until the current process is finished";
        return;
      }
      this.$refs.baseModalComponentRef.showModal();
    },

    // EventSource listeners for sse
    OnStart(e) {
      this.process = this.process + 1;
      this.isStart = true;
      this.overlayLoader = false;
      console.log(e);
    },
    OnFinish(e) {
      this.msg = "Customer synchronization stopped";
      this.process = this.process - 1;
      console.log(e);
    },
    startLocalWithSplynx() {
      const endpoint = "local-customer-sync";
      this.overlayLoader = true;
      this.isStart = true;
      this.startSynchronization(
        "Local database synchronization Started",
        endpoint
      );
    },

    startLocalWithPaystack() {
      this.isStart = true;
      console.log("startLocalWithPaystack");
    },

    startLocalWithQuickbooks() {
      this.isStart = true;
      console.log("startLocalWithQuickbooks");
    },

    fullSync() {
      this.isStart = true;
      console.log("fullSync");
    },
    //sse function
    eventData(e) {
      let newArray = [];
      newArray.push(JSON.parse(e.data));
      // this.content.data = newArray;
      console.log(newArray);
    },

    // Start synchronization
    startSynchronization(message = undefined, endpoint = "") {
      this.overlayLoader = true;
      this.msg = message;
      let newArray = [];
      if (message === undefined) {
        this.msg = "Empty request Object";
        return;
      }

      try {
        let eventSource = new EventSource(`${developmentUrl}/${endpoint}`);
        this.sseEvent = eventSource;
        // data event
        eventSource.onmessage = (e) => {
          newArray.push(JSON.parse(e.data));
        };
        eventSource.addEventListener("finish", this.OnFinish);
        eventSource.addEventListener("start", this.OnStart);
        this.content.data = newArray;
        return;
      } catch (e) {
        console.log(e);
      }
    },

    // Stop sync
    disconnect() {
      this.sseEvent.close();
      this.process = this.process - 1;
      this.msg = "Customer synchronization stopped";
      this.isStart = false;
    },
  },

  watch: {
    syncType: {
      handler(value) {
        this.HideModal();
        switch (value) {
          case "Local":
            this.startLocalWithSplynx();
            break;
          case "Paystack":
            this.startLocalWithPaystack();
            break;
          case "Quickbooks":
            this.startLocalWithQuickbooks();
            break;
          case "full":
            this.startSynchronization();
            break;
          case "History":
            this.startLocalWithQuickbooks();
            break;
          default:
            break;
        }
      },
    },
  },

  async mounted() {
    this.loader = true;
    try {
      // const overview = await this.$CustomerService.getOverview();
      this.overviewContent = {
        // ...overview.data,
      };
    } catch (error) {
      console.log(error);
    } finally {
      this.loader = false;
    }
  },
};
</script>

<style lang="scss" scoped>
.md-primary {
  background-color: #1a814c !important;
}

.content-sharp {
  display: flex;
  gap: 1rem;
  margin-block: 1rem;
  z-index: 9999;
  transition: all 500ms ease-in-out;
}

.fixed {
  height: 30rem;
  // background-color: red;
  width: 100%;
  overflow-y: scroll;
  scroll-behavior: smooth;
  position: relative;
}

.fixed-input {
  position: sticky;
  width: max-content;
}

.badge {
  background-color: rgb(209, 208, 208) !important;
  font-weight: 800;
  cursor: pointer;

  &:hover {
    background-color: rgb(85, 85, 85) !important;
  }
}
</style>
