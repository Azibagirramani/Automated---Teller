<template>
  <div class="">
    <div class="row">
      <div class="col-md-9">
        <BaseCard
          :exHeader="'border-0 py-0 pt-3'"
          :baseExClass="'border-0'"
          :exClass="'py-0'"
        >
          <div class="table-content">
            <BaseInput :placeholder="'Search.......'" v-model="searchKey" />
            <BaseTable
              :bordered="false"
              :borderless="true"
              :loading="loader"
              :items="computedCustomers"
              :fields="fields"
              :currentPage="currentPage"
              :perPage="perPage"
              :outlined="false"
              :small="false"
              :hover="true"
              :tableCaption="tableCaption"
            />
          </div>

          <div
            class="
              d-flex
              gap-4
              justify-content-end
              py-2
              mt-3
              align-items-center
            "
          >
            <div class="d-flex align-items-center gap-4">
              <span>Per Page</span>
              <BaseSelect :items="[5, 10]" v-model="perPage" />
            </div>
            <BasePagination
              :totalItems="computedCustomers.length"
              :currentPage="currentPage"
              :perPage="perPage"
              :basExClass="'mt-2'"
              @page-changed="pageChanged"
            />
          </div>
        </BaseCard>

        <div class="row mt-3">
          <div
            class="col"
            v-for="(items, index) in tableTypes"
            :key="index"
            @click="query(items)"
          >
            <BaseCard
              :header="true"
              :exHeader="'border-0 '"
              :baseExClass="
                index == 1
                  ? 'bg-dark text-white  border-0 card--hover'
                  : ' border-0 card--hover shadow'
              "
            >
              <template v-slot:header>
                <h6>{{ items.title }}</h6>
              </template>

              <div>
                <h3 :class="index == 1 ? 'text-white' : ''">
                  {{ items.value }}
                </h3>
              </div>
            </BaseCard>
          </div>
        </div>
      </div>
      <div class="col-md-3">
        <BaseCard :baseExClass="'border-0'">
          <div>
            <h5>Filters</h5>
            <div class="d-flex flex-column gap-0">
              <!-- <BaseCheckbox v-model="check" /> -->
              <div class="mt-2">
                <p class="m-0">Status</p>
                <BaseCheckbox
                  v-model="queryparams.status"
                  v-for="items in ['Active', 'Blocked', 'disabled']"
                  :key="items.toString()"
                  :label="items"
                />
              </div>
              <div class="mt-2">
                <p class="mb-2">Dates</p>
                {{ queryparams.add_date }}
                <div class="d-flex flex-column">
                  <BaseDatePicker
                    v-model="queryparams.add_date"
                    :label="'Date added'"
                  />
                  <BaseDatePicker
                    v-model="queryparams.last_update"
                    :label="'Last updated'"
                  />
                </div>
              </div>

              <div class="mt-2">
                <p class="mb-2">Billing type</p>
                <div class="d-flex flex-column">
                  <BaseSelect
                    :items="['Recurring', 'Prepaid monthly']"
                    v-model="queryparams.billing_type"
                  />
                </div>
              </div>
            </div>
          </div>
        </BaseCard>
      </div>
    </div>
  </div>
</template>

<script>
import BaseTable from "../../../components/layouts/_table.vue";
import BaseCard from "../../../components/partials/_basecard.vue";
import BasePagination from "../../../components/layouts/_pagination.vue";
import BaseCheckbox from "../../../components/forms/_checkbox.vue";
import BaseInput from "../../../components/forms/_input.vue";
import BaseDatePicker from "../../../components/forms/_datepicker.vue";
import BaseSelect from "../../../components/forms/_select.vue";
export default {
  components: {
    BaseCard,
    BaseTable,
    BasePagination,
    BaseCheckbox,
    BaseInput,
    BaseDatePicker,
    BaseSelect,
  },
  data() {
    return {
      currentPage: 1,
      queryparams: {},
      selectedDate: null,
      lastSeen: null,
      loader: false,
      tableTypes: [
        {
          title: "Customers",
          value: "0",
          set: 1,
        },
        {
          title: "New customers",
          value: "0",
          set: 2,
        },
        {
          title: "Updated Customers",
          value: "0",
          set: 3,
        },
        {
          title: "Deleted Customers",
          value: "0",
          set: 4,
        },
      ],
      status: "active",
      fields: [
        {
          key: "billing_type",
          label: "Bill Type",
          sortable: true,
          formatter: (value) => {
            return value
              .replace(/^\w/, (c) => c.toUpperCase())
              .replace(/_/g, " ");
          },
        },
        {
          key: "first_name",
          label: "First Name",
        },
        {
          key: "last_name",
          label: "Last Name",
        },
        {
          key: "phone",
          label: "Phone",
        },
        {
          key: "status",
          label: "Status",
          sortable: true,
        },
      ],
      searchKey: "",
      modalContent: {},
      perPage: 10,
      totalItems: 0,
      filtered: [],
      customers: [],
      tableCaption: "Customers",
    };
  },

  computed: {
    computedFullName() {
      return this.modalContent.first_name + " " + this.modalContent.last_name;
    },
    computedCustomers() {
      return this.customers.filter((customer) => {
        return (
          customer.first_name
            .toLowerCase()
            .includes(this.searchKey.toLowerCase()) ||
          customer.last_name
            .toLowerCase()
            .includes(this.searchKey.toLowerCase())
        );
      });
    },
  },

  methods: {
    pageChanged(page) {
      this.currentPage = page;
    },

    async getAllCustomers() {
      try {
        this.loader = true;
        let content = await this.$CustomerService.customers();
        this.customers = content.data;
      } catch (error) {
        this.loader = false;
        console.log(error);
      } finally {
        this.loader = false;
      }
    },

    async queryMethod() {
      try {
        // const date = new Date();
        let localQuery = {};
        // const year = date.getFullYear();
        // const month = date.getMonth() + 1;
        // const day = date.getDate() - 1;
        // const dateTime = `${year}-${month}-${day}`;
        // this.queryparams.add_date = dateTime;

        localQuery = {
          ...this.queryparams,
        };

        // localQuery.add_date = dateTime;
        let content = await this.$CustomerService.customerFilter(localQuery);
        this.customers = content.data;
        console.log(content);
      } catch (error) {
        console.log(error);
      } finally {
        this.loader = false;
      }
    },

    async query(data = {}) {
      this.loader = true;
      this.tableCaption = data.title;
      switch (data.set) {
        case 1:
          this.getAllCustomers();
          break;

        case 2:
          this.queryMethod();
          break;
        default:
          break;
      }
    },
  },
  watch: {
    queryparams: {
      handler() {
        this.queryMethod();
      },
      deep: true,
    },
  },

  async mounted() {
    await this.getAllCustomers();
  },
};
</script>

<style lang="scss" scoped>
.table-content {
  max-height: 40rem;
}

a {
  color: #000;

  &:hover {
    color: #000 !important;
    text-decoration: none;
  }
}
</style>
