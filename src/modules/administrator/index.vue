<template>
  <div class="" id="index">
    <div class="row w-100 vh-100">
      <div class="col-2 p-0 d-none d-lg-block">
        <SideBar />
      </div>
      <div class="col p-0 bg-secondary">
        <div class="px-4">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import SideBar from "./admin-components/_sidebar.vue";

export default {
  name: "index",
  components: {
    SideBar,
  },
};
</script>

<style lang="scss" scoped></style>
