<template>
  <BaseCard>
    <div class="px-4">
      <div class="d-flex justify-content-end">
        <md-button class="md-fab md-plain bg-white">
          <md-icon class="text-dark">edit</md-icon>
        </md-button>
      </div>

      <b-tabs>
        <b-tab active>
          <template #title> All customers </template>
          <div class="mt-4">
            <BaseInput
              v-model="searchKey"
              :type="'text'"
              :placeholder="'Search for customer...'"
            />
            <BaseTable
              :hover="false"
              :items="computedCustomers"
              :fields="fields"
              :currentPage="currentPage"
              :perPage="perPage"
              :bordered="true"
              :striped="true"
              :outlined="true"
              :small="false"
              @row-selected="rowSelected"
            />
            <div class="d-flex justify-content-end gap-4 align-items-center">
              <BaseSelect :label="'Per Page'" :items="['5', '10']" />
              <BasePagination
                :basExClass="'mt-2'"
                :currentPage="currentPage"
                :perPage="perPage"
                :totalItems="computedCustomers.length"
                @page-changed="pageChanged"
              />
            </div>
          </div>
        </b-tab>

        <b-tab>
          <template #title> New customers </template>
          <p class="p-3">Tab contents 2</p>
        </b-tab>

        <b-tab>
          <template #title> Updated customers </template>
          <p class="p-3">Tab contents 2</p>
        </b-tab>

        <b-tab>
          <template #title> Deleted customers </template>
          <p class="p-3">Tab contents 2</p>
        </b-tab>
      </b-tabs>
    </div>
    <BaseModal ref="basemodal">
      <div class="">
        <h2 class="text-primary text-uppercase">
          {{ computedFullName }}
        </h2>
        <div class="d-flex justify-content-between mt-5">
          <div>
            <p><b>Email:</b> {{ modalContent.email }}</p>
            <p><b>Phone:</b> {{ modalContent.phone }}</p>
            <p><b>Address:</b> {{ modalContent.status }}</p>
          </div>
        </div>
      </div>
    </BaseModal>
  </BaseCard>
</template>

<script>
// import BaseSelect from "../../../components/forms/_select.vue";
import BaseCard from "../../../components/partials/_basecard.vue";
import BaseTable from "../../../components/layouts/_table.vue";
import BaseModal from "../../../components/partials/_modal.vue";
import BaseSelect from "../../../components/forms/_select.vue";
import BasePagination from "../../../components/layouts/_pagination.vue";
import BaseInput from "../../../components/forms/_input.vue";
export default {
  components: {
    BaseTable,
    BaseCard,
    BaseSelect,
    BaseModal,
    BasePagination,
    BaseInput,
  },
  data() {
    return {
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
          formatter: (item) => {
            if (item.paystack_id) {
              return "Customer Synced";
            } else {
              return "Unsynced";
            }
          },
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

    // listen for emitted event on table row
    rowSelected(item) {
      this.modalContent = item;
      this.$refs.basemodal.showModal();
    },
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
