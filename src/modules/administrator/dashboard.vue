<template>
  <div class="" id="dasboard">
    <SideBar />
    <div class="col-md-12 p-0">
      <!-- header section -->
      <div class="bg-primary pt-2">
        <div class="container-fluid px-5">
          <div class="row g-0">
            <div
              class="col-md-2 d-flex flex-column justify-content-center py-1"
            >
              <b-icon icon="house-door-fill" variant="success" font-scale="4" />
              <h6 class="m-0 fc-l-white fw--7 mt-1">Dotmac Technologies</h6>
              <p class="text-primary">Lorem, ipsum dolor.</p>
              <div class="5">
                <BaseToggle />
              </div>
            </div>
            <div class="col-md-8">
              <BaseChart />
              <div class="row charts py-1">
                <div class="col d-flex flex-column">
                  <p class="m-0 text-uppercase fs--7 fw--7 fc-l-light-p">
                    Total cost
                  </p>
                  <p class="display-5 text-white fw--6">$35.000</p>
                </div>
                <div class="col d-flex flex-column">
                  <p class="m-0 text-uppercase fs--7 fw--7 fc-l-light-p">
                    Customers
                  </p>
                  <p class="display-5 text-white fw--6">1,3456,0</p>
                </div>
                <div class="col d-flex flex-column">
                  <p class="m-0 text-uppercase fs--7 fw--7 fc-l-light-p">
                    Transactions
                  </p>
                  <p class="display-5 text-white fw--6">35</p>
                </div>
                <div class="col d-flex flex-column">
                  <p class="m-0 text-uppercase fs--7 fw--7 text-primary">
                    Recent update
                  </p>
                  <p class="fs--7 fc-l-grey fw--8">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Sint, animi?
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-2 d-flex flex-column justify-content-center">
              <div class="">
                <BaseSelect />
              </div>
            </div>
          </div>
          <div class=""></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SideBar from "./admin-components/_sidebar.vue";
import BaseSelect from "../../components/forms/_select.vue";
import BaseToggle from "../../components/forms/_switch.vue";
import BaseChart from "../../components/chart/_baseChart.vue";
export default {
  name: "Dashboard",
  components: {
    SideBar,
    BaseSelect,
    BaseToggle,
    BaseChart,
  },
  methods: {
    openSideBar() {
      // this.$emit("openSideBar");
    },
  },
};
</script>

<style lang="scss" scoped>
$custom-bg-color: #031d46;

.bg-primary {
  background-color: $custom-bg-color !important;
}

.fc-l-grey {
  color: #596487 !important;
}

.fc-l-light-p {
  color: #2f4579 !important;
}

.fc-l-white {
  color: #aaacb9 !important;
}
</style>
