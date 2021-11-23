<template>
  <div class="">
    <md-list>
      <!-- <md-list-item to="/portal">
        <md-icon>people</md-icon>
        <span class="md-list-item-text">Customers</span>
      </md-list-item>
      <md-list-item to="/portal/data-sync">
        <md-icon>cached</md-icon>
        <span class="md-list-item-text">Synchronize</span>
      </md-list-item>
      <md-list-item to="/portal">
        <md-icon>history</md-icon>
        <span class="md-list-item-text">Activities</span>
      </md-list-item> -->
    </md-list>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sidebarHidden: false,
      routes: [
        {
          path: "/portal",
          name: "Overview",
          icon: "dashboard",
        },
        {
          path: "",
          name: "Customers",
          icon: "people",
        },
        {
          path: "/portal/data-sync",
          name: "Sync",
          icon: "cached",
        },
        {
          path: "",
          name: "Activities",
          icon: "history",
        },
        // {
        //   path: "",
        //   name: "Account",
        //   icon: "mdi-view-dashboard",
        // },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>

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
