<template>
  <div class="">
    <div class="p-0 m-0">
      <b-nav vertical>
        <b-nav-item
          v-for="(route, index) in routes"
          :key="index"
          class="text-center p-0"
        >
          <span class="">{{ route.name }}</span>
        </b-nav-item>
      </b-nav>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sidebarHidden: false,
      routes: [
        {
          path: "",
          name: "Overview",
          icon: "mdi-view-dashboard",
        },
        {
          path: "",
          name: "Customers",
          icon: "mdi-view-dashboard",
        },
        {
          path: "",
          name: "Transfers",
          icon: "mdi-view-dashboard",
        },
        {
          path: "",
          name: "Activities",
          icon: "mdi-view-dashboard",
        },
        {
          path: "",
          name: "Account",
          icon: "mdi-view-dashboard",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
// li a colors
$link-color: #bcbcbd;

// normal color
$hover-color: #ebf5f0;

// default color
$default-color: #1a814c;

// light hover color
$hover-light-color: #1a814c;

ul {
  padding: 0px;
  margin: 0px;
  position: relative;
  li {
    padding: 0.9rem;
    display: inline-block;
    margin: 0px;
    // padding: 1.5rem 0rem;
    width: 100%;
    &:hover a {
      background-color: $hover-color;
      color: $default-color !important;
    }
    a {
      color: $link-color;
      padding: 1rem;
      font-size: 1rem;
      font-weight: 600;
      padding: 1.1rem 0rem;
    }
  }
}
</style>
