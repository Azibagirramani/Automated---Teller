<template>
  <BaseCard>
    <div class="px-5">
      <b-tabs>
        <b-tab active>
          <template #title>
            <b-spinner type="border" small></b-spinner>
            All customers
          </template>
          <div class="mt-4">
            <BaseTable :items="customers" :fields="fields" />
          </div>
        </b-tab>

        <b-tab>
          <template #title>
            <b-spinner type="border" small></b-spinner> New customers
          </template>
          <p class="p-3">Tab contents 2</p>
        </b-tab>

        <b-tab>
          <template #title>
            <b-spinner type="border" small></b-spinner> Updated customers
          </template>
          <p class="p-3">Tab contents 2</p>
        </b-tab>

        <b-tab>
          <template #title>
            <b-spinner type="border" small></b-spinner> Deleted customers
          </template>
          <p class="p-3">Tab contents 2</p>
        </b-tab>
      </b-tabs>
    </div>
  </BaseCard>
</template>

<script>
import BaseCard from "../../../components/partials/_basecard.vue";
import BaseTable from "../../../components/layouts/_table.vue";
export default {
  components: {
    BaseTable,
    BaseCard,
  },
  data() {
    return {
      customers: [],
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
        // {
        //   key: "status",
        //   label: "Status",
        //   sortable: true,
        // },
      ],
    };
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
