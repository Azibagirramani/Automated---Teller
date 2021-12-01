<template>
  <div class="m-0 m-0">
    <div class="row">
      <div class="col">
        <BaseOverlay :show="loader">
          <BaseCard :baseExClass="'shadow-sm border-0 card--hover'">
            <div class="d-flex flex-column align-items-center">
              <p class="fw-bold text-capitalize">Pending</p>
              <p class="fs-1 fw-bold">
                {{ 0 }}
              </p>
              <p class="text-primary">+2%</p>
            </div>
          </BaseCard>
        </BaseOverlay>
      </div>
      <div class="col">
        <BaseOverlay :show="loader">
          <BaseCard :baseExClass="'shadow-sm border-0 card--hover'">
            <div class="d-flex flex-column align-items-center">
              <p class="fw-bold text-capitalize">Local</p>
              <p class="fs-1 fw-bold">
                {{ overviewContent.local_database || 0 }}
              </p>
              <p class="text-primary">+2%</p>
            </div>
          </BaseCard>
        </BaseOverlay>
      </div>
      <div class="col">
        <BaseOverlay :show="loader">
          <BaseCard :baseExClass="'shadow-sm border-0 card--hover'">
            <div class="d-flex flex-column align-items-center">
              <p class="fw-bold text-capitalize">Total</p>
              <p class="fs-1 fw-bold">
                {{ overviewContent.total_splynx_customers || 0 }}
              </p>
              <p class="text-primary">+2%</p>
            </div>
          </BaseCard>
        </BaseOverlay>
      </div>
      <div class="col">
        <BaseOverlay :show="loader">
          <BaseCard :baseExClass="'shadow-sm border-0 card--hover'">
            <div class="d-flex flex-column align-items-center">
              <p class="fw-bold text-capitalize">runing processes</p>
              <p class="fs-1 fw-bold">
                {{ process || 0 }}
              </p>
              <p class="text-primary">+2%</p>
            </div>
          </BaseCard>
        </BaseOverlay>
      </div>
      <div class="col">
        <BaseOverlay :show="loader">
          <BaseCard :baseExClass="'shadow-sm border-0 card--hover'">
            <div class="d-flex flex-column align-items-center">
              <p class="fw-bold text-capitalize">History</p>
              <p class="fs-1 fw-bold">
                {{ 0 }}
              </p>
              <p class="text-primary">+2%</p>
            </div>
          </BaseCard>
        </BaseOverlay>
      </div>
    </div>

    <div class="d-flex justify-content-end mt-5 px-3">
      <button class="btn btn-primary mr-3" type="button" @click="showModal">
        Start
      </button>
      <button class="btn btn-primary" type="button" @click="disconnect">
        Stop
      </button>
    </div>

    <div class="mt-5">
      <div class="row p-0">
        <div class="col-md-12">
          <md-progress-bar
            class="md-primary"
            md-mode="indeterminate"
            v-if="isStart"
          ></md-progress-bar>
          <BaseOverlay :show="overlayLoader">
            <div class="fixed">
              <input
                placeholder="Search..."
                class="w-100 form-control fixed-input"
              />
              <div
                class="container content-sharp shadow-sm"
                v-for="(items, index) in computedCustomers"
                :key="index"
              >
                <p class="text-left">
                  {{ items.data.first_name }} {{ items.data.last_name }}
                </p>

                <span class="">{{ items.data.email }}</span>
                <span class="text-primary text-capitalize">{{
                  items.data.billing_type.replace(/\_/g, " ")
                }}</span>
                <span
                  class="text-primary text-capitalize"
                  v-if="items.data.status === 'active'"
                  >{{ items.data.status }}</span
                >
                <span class="text-danger text-capitalize" v-else>{{
                  items.data.status
                }}</span>

                <span class="text-success" v-if="items.data.created">
                  Customer was created
                </span>
                <span class="text-warning" v-else> Customer was Updated </span>
              </div>
            </div></BaseOverlay
          >
        </div>
      </div>
    </div>

    <BaseToast :label="msg" />
    <BaseModal ref="baseModalComponentRef">
      <div class="d-flex-inline flex-column">
        <p>Basic actions</p>
        <div class="row gy-2">
          <div class="col">
            <b-badge
              pill
              variant="primary"
              class="px-4 py-2"
              @click="syncType = 'Local'"
              >Sync Local with Splynx</b-badge
            >
          </div>
          <div class="col">
            <b-badge
              pill
              variant="primary"
              class="px-4 py-2"
              @click="syncType = 'Paystack'"
              >Sync Local with paystack</b-badge
            >
          </div>
          <div class="col">
            <b-badge
              pill
              variant="primary"
              class="px-4 py-2"
              @click="syncType = 'Quickbooks'"
              >Sync Local With quickbooks</b-badge
            >
          </div>
          <div class="col">
            <b-badge pill variant="primary" class="px-4 py-2">History</b-badge>
          </div>
        </div>
        <div class="mt-4">
          <p>Advanced Synchronization</p>
          <div class="row gy-2">
            <div class="col">
              <b-badge pill variant="primary" class="px-4 py-2"
                >Customer Synchronization</b-badge
              >
            </div>
            <div class="col">
              <b-badge pill variant="primary" class="px-4 py-2"
                >Create Sales Receipt</b-badge
              >
            </div>
          </div>
        </div>
      </div>
    </BaseModal>
  </div>
</template>

<script>
import BaseModal from "../../../components/partials/_modal.vue";
import BaseOverlay from "../../../components/partials/_overlay.vue";
import BaseToast from "../../../components/partials/_toast.vue";
import BaseCard from "../../../components/partials/_basecard.vue";
import { developmentUrl } from "../../../plugins/axiosInstance";
export default {
  components: {
    BaseToast,
    BaseCard,
    BaseOverlay,
    BaseModal,
  },
  data() {
    return {
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
