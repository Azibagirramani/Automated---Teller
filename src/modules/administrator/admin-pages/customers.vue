<template>
  <div class="">
    <div class="row">
      <div class="col-md-9">
        <BaseCard
          :exHeader="'border-0 py-0 pt-3'"
          :baseExClass="'border-0'"
          :exClass="'py-0'"
        >
          <BaseTable :bordered="false" :borderless="true" :loading="loader"/>

          <div class="d-flex justify-content-end py-2">
            <BasePagination />
          </div>
        </BaseCard>

        <div class="row mt-3">
          <div
            class="col"
            v-for="(items, index) in tableTypes"
            :key="index"
            @click="updateTable(items)"
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
        <BaseCard>
          <div>
            <md-list md-expand-single="true">
              <md-subheader>Filters</md-subheader>
              <md-list-item md-expand md-expanded.sync="true">
                <span class="md-list-item-text">Status</span>

                <md-list slot="md-expand">
                  <md-list-item class="md-inset">
                    <md-checkbox v-model="status" value="active" />
                    <span class="md-list-item-text">Active</span>
                  </md-list-item>
                  <md-list-item class="md-inset">
                    <md-checkbox v-model="status" value="disabled" />
                    <span class="md-list-item-text">Disabled</span>
                  </md-list-item>
                  <md-list-item class="md-inset">
                    <md-checkbox v-model="status" value="blocked" />
                    <span class="md-list-item-text">blocked</span>
                  </md-list-item>
                </md-list>
              </md-list-item>
              <md-list-item md-expand md-expanded.sync="true">
                <span class="md-list-item-text">Billing type</span>

                <md-list slot="md-expand">
                  <md-list-item class="md-inset">
                    <md-checkbox v-model="status" value="active" />
                    <span class="md-list-item-text">Active</span>
                  </md-list-item>
                  <md-list-item class="md-inset">
                    <md-checkbox v-model="status" value="disabled" />
                    <span class="md-list-item-text">Disabled</span>
                  </md-list-item>
                  <md-list-item class="md-inset">
                    <md-checkbox v-model="status" value="blocked" />
                    <span class="md-list-item-text">blocked</span>
                  </md-list-item>
                </md-list>
              </md-list-item>
            </md-list>
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
export default {
  components: {
    BaseCard,
    BaseTable,
    BasePagination,
  },
  data() {
    return {
      loader: false,
      tableTypes: [
        {
          title: "Customers",
          value: "2k",
        },
        {
          title: "New customers",
          value: "10",
        },
        {
          title: "Updated Customers",
          value: "10",
        },
        {
          title: "Deleted Customers",
          value: "0",
        },
      ],
      status: "active",
      customers: [
        {
          first_name: "John",
          last_name: "DoeD",
          billing_type: "Credit Card",
          phone: "1234567890",
          status: "Active",
        },
        {
          first_name: "John",
          last_name: "DoeV",
          billing_type: "Credit Card",
          phone: "1234567890",
          status: "Active",
        },
        {
          first_name: "John",
          last_name: "DoeS",
          billing_type: "Credit Card",
          phone: "1234567890",
          status: "Active",
        },
        {
          first_name: "John",
          last_name: "DoeE",
          billing_type: "Credit Card",
          phone: "1234567890",
          status: "Active",
        },
        {
          first_name: "John",
          last_name: "DoeW",
          billing_type: "Credit Card",
          phone: "1234567890",
          status: "Active",
        },
        {
          first_name: "John",
          last_name: "DoeC",
          billing_type: "Credit Card",
          phone: "1234567890",
          status: "Active",
        },
        {
          first_name: "John",
          last_name: "DoeZ",
          billing_type: "Credit Card",
          phone: "1234567890",
          status: "Active",
        },
        {
          first_name: "John",
          last_name: "DoeQ",
          billing_type: "Credit Card",
          phone: "1234567890",
          status: "Active",
        },
        {
          first_name: "John",
          last_name: "DoeWER",
          billing_type: "Credit Card",
          phone: "1234567890",
          status: "Active",
        },
        {
          first_name: "John",
          last_name: "DoeSCX",
          billing_type: "Credit Card",
          phone: "1234567890",
          status: "Active",
        },
        {
          first_name: "John",
          last_name: "DoeSWER",
          billing_type: "Credit Card",
          phone: "1234567890",
          status: "deleted",
        },
        {
          first_name: "John",
          last_name: "DoeZSAQWER",
          billing_type: "Credit Card",
          phone: "1234567890",
          status: "Active",
        },
        {
          first_name: "John",
          last_name: "DoeSAWERTY",
          billing_type: "Credit Card",
          phone: "1234567890",
          status: "Active",
        },
      ],
      fields: [
        {
          key: "billing_type",
          label: "Bill Type",
          sortable: true,
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
          formatter: (items) => {
            return items.split(",")[0];
          },
        },
        {
          key: "status",
          label: "Status",
        },
        {
          key: "actions",
        },
      ],
      searchKey: "",
      modalContent: {},
      currentPage: 1,
      perPage: 5,
      totalItems: 0,
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

    updateTable(index){
      console.log(index)
      this.loader = true
    }
  },

  async mounted() {
    let content = await this.$CustomerService.customers();
    this.customers = content.data.items;
    console.log(this.customers);
  },
};
</script>

<style lang="scss" scoped>
a {
  color: #000;

  &:hover {
    color: #000 !important;
    text-decoration: none;
  }
}
</style>
