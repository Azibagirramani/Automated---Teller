<template>
  <div class="" id="dasboard">
    <div class="row w-100 vh-100">
      <div class="col-2 p-0 d-none d-lg-block">
        <SideBar />
      </div>
      <div class="col p-0 bg-secondary">
        <div class="row px-5 d-flex mt-5">
          <div class="col-md-9 flex-fill">
            <BaseCard
              :baseExClass="'border-0 rounded-0 p-0 m-0'"
              :exClass="'p-0 m-0'"
            >
              <BaseTable
                :borderless="true"
                :items="tabledata"
                :columns="fields"
              ></BaseTable>
            </BaseCard>
          </div>
          <div class="col-md-3 flex-fill">
            <BaseOverlay :show="false">
              <BaseCard
                :baseExClass="'border-0 rounded'"
                :header="true"
                :exClass="'p-0 m-0'"
              >
                <template v-slot:header>
                  <h6 class="text-center fw-bold text-uppercase">Overview</h6>
                </template>
                <div class="d-flex flex-column gap-4 align-items-center">
                  <div class="text-center">
                    <p class="display-4 fc--primary-dark-shade fw--6">
                      400,000
                    </p>
                    <p class="text-uppercase fw--6">Customers</p>
                  </div>
                  <div class="text-center border-top">
                    <p class="display-4 fc--primary-dark-shade fw--6">
                      400,000
                    </p>
                    <p class="text-uppercase fw--6">Total syncs</p>
                  </div>
                </div>
              </BaseCard>
            </BaseOverlay>
          </div>
        </div>

        <div class="row px-5 d-flex mt-5">
          <div class="col-md-9 flex-fill">
            <SyncActivities></SyncActivities>
          </div>
          <div class="col-md-3 flex-fill">
            <BaseOverlay :show="false">
              <BaseCard
                :baseExClass="'border-0 rounded'"
                :header="true"
                :exClass="'p-0 m-0'"
              >
                <template v-slot:header>
                  <h6 class="text-center fw-bold text-uppercase">overrall</h6>
                </template>
                <div>
                  <BaseChart
                    :series="series"
                    :options="options"
                    :height="'300rem'"
                  />
                </div>
              </BaseCard>
            </BaseOverlay>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import TopNav from "./admin-components/_topNav.vue";
import BaseTable from "../../components/layouts/_table.vue";
import SideBar from "./admin-components/_sidebar.vue";
import BaseCard from "../../components/partials/_basecard.vue";
import BaseOverlay from "../../components/partials/_overlay.vue";
import SyncActivities from "./admin-partials/_syncActivities.vue";
// import BaseSelect from "../../components/forms/_select.vue";
// import BaseToggle from "../../components/forms/_switch.vue";
import BaseChart from "../../components/chart/_baseChart.vue";
export default {
  name: "Dashboard",
  components: {
    SideBar,
    BaseCard,
    BaseTable,
    BaseOverlay,
    // BaseSelect,
    // BaseToggle,
    BaseChart,
    SyncActivities,
    // TopNav
  },
  data() {
    return {
      fields: [
        { key: "name" },
        { key: "email" },
        {
          key: "status",
          formatter: (value) => {
            return value.toLowerCase() === "active" ? "Active" : "Inactive";
          },
        },
      ],
      tabledata: [
        {
          name: "John Doe",
          email: "",
          status: "active",
        },
        {
          name: "John Doe",
          email: "",
          status: "active",
        },
        {
          name: "John Doe",
          email: "",
          status: "active",
        },
        {
          name: "John Doe",
          email: "",
          status: "active",
        },
        {
          name: "John Doe",
          email: "",
          status: "active",
        },
      ],
      series: [5],
      options: {
        chart: {
          toolbar: {
            show: false,
          },
          type: "donut",
        },
        grid: {
          show: false,
        },
        legend: {
          show: false,
        },
        colors: ["#1a814c"],
        stroke: {
          width: 0,
          colors: ["red"],
        },
        dataLabels: {
          enabled: false,
        },
        tooltip: {
          enabled: false,
        },
        plotOptions: {
          pie: {
            donut: {
              size: "90%",
              labels: {
                show: true,
                name: {
                  show: true,
                  offsetY: 38,
                },
                value: {
                  show: true,
                  offsetY: -10,
                  fontSize: "48px",
                },
              },
            },
          },
        },
      },
    };
  },
};
</script>

<style lang="scss" scoped></style>
