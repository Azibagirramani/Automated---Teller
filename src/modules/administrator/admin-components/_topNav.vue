<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-primary">
    <div class="container-fluid">
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarTogglerDemo01"
        aria-controls="navbarTogglerDemo01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
        <a class="navbar-brand" href="#">Dotmac Technologies</a>
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link" aria-current="home" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" aria-current="orders" href="#">Orders</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" aria-current="customer" href="#">customers</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" aria-current="stats" href="#"
              >Stats and reports</a
            >
          </li>
        </ul>
        <div class="">
          <a class="btn btn-outline-light" href="#">
            <i class="fa fa-sign-out"></i> Logout
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
nav {
  padding: 0.4rem 0rem;
  align-items: center;
  .navbar-brand {
    font-size: 1.5em;
    font-weight: bold;
    color: #fff;
    &:hover {
      color: #fff;
    }
  }
  .navbar-toggler {
    border: none;
    background: transparent;
    &:focus {
      outline: none;
      box-shadow: none;
    }
  }

  .navbar-nav {
    align-items: center;
  }

  ul {
    padding-left: 5%;
    li { 
      a {
        font-size: 0.8rem;
        font-weight: 600;
        color: rgb(218, 214, 214) !important;
        text-transform: upperCase;
        &:hover {
          color: white !important;
        }
      }
    }
  }
}
</style>
