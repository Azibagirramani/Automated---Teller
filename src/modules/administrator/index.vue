<template>
  <div class="page-container">
    <md-app md-waterfall md-mode="overlap">
      <md-app-toolbar class="bg-primary md-large">
        <div class="md-toolbar-row">
          <md-button class="md-icon-button" @click="menuVisible = !menuVisible">
            <md-icon class="text-white">menu</md-icon>
          </md-button>

          <span class="md-title text-uppercase text-white">{{
            this.$route.name
          }}</span>
        </div>
      </md-app-toolbar>

      <md-app-drawer :md-active.sync="menuVisible">
        <md-toolbar class="md-transparent" md-elevation="0">
          Navigation
        </md-toolbar>

        <md-list>
          <md-list-item to="/portal">
            <md-icon class="">dashboard</md-icon>
            <span class="md-list-item-text">Overview</span>
          </md-list-item>
          <md-list-item to="/portal/customers">
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
          </md-list-item>
        </md-list>
      </md-app-drawer>

      <md-app-content class="bg-base bg-dark">
        <router-view></router-view>
      </md-app-content>
    </md-app>
  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      menuVisible: false,
    };
  },
  methods: {
    toggleMenu() {
      this.menuVisible = !this.menuVisible;
    },
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

.bg-base {
  background-color: #f0f6f8 !important;
}

.md-app {
  min-height: 100vh;
  border: 1px solid rgba(#000, 0.12);
}

// Demo purposes only
.md-drawer {
  width: 14rem;
}

.md-list-item {
  i {
    color: #0e1635 !important;
  }

  .md-list-item-text {
    color: $link-color;
    font-size: 1rem;
    font-weight: 600;
  }
  &:hover .md-list-item-text {
    color: #0e1635 !important;
  }
  &:hover {
    background-color: $hover-color;
    color: #0e1635 !important;
  }
}
</style>
