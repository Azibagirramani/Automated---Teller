<template>
  <div class="" id="dasboard">
    <TopNav />
  </div>
</template>

<script>
import TopNav from "./admin-components/_topNav.vue"; 
// import SideBar from "./admin-components/_sidebar.vue";
// import BaseSelect from "../../components/forms/_select.vue";
// import BaseToggle from "../../components/forms/_switch.vue";
// import BaseChart from "../../components/chart/_baseChart.vue";
export default {
  name: "Dashboard",
  components: {
    // SideBar,
    // BaseSelect,
    // BaseToggle,
    // BaseChart,
    TopNav
  },
  methods: {
    openSideBar() {
      // this.$emit("openSideBar");
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
