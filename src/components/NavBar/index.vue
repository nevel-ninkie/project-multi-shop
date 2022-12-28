<template>
  <div class="container-fluid bg-dark mb-30">
    <div class="row px-xl-5">
      <div class="col-12">
        <nav
          class="navbar navbar-expand-lg bg-dark navbar-dark py-3 py-lg-0 px-0"
        >
          <router-link to="" class="text-decoration-none d-block d-lg-none">
            <span class="h1 text-uppercase text-dark bg-light px-2">
              Multi
            </span>
            <span class="h1 text-uppercase text-light bg-primary px-2 ml-n1">
              Shop
            </span>
          </router-link>
          <button
            type="button"
            class="navbar-toggler"
            data-toggle="collapse"
            data-target="#navbarCollapse"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse justify-content-between"
            id="navbarCollapse"
          >
            <div class="navbar-nav mr-auto py-0">
              <router-link to="/" class="nav-item nav-link active">
                Home
              </router-link>
              <router-link to="/cart" class="nav-item nav-link">
                Shopping Cart
              </router-link>
              <router-link to="/contact" class="nav-item nav-link">
                Contact
              </router-link>
            </div>
            <div class="navbar-nav ml-auto py-0 d-none d-lg-block">
              <router-link to="/cart" class="btn px-0 ml-3">
                <i class="fas fa-shopping-cart text-primary"></i>
                <span
                  class="badge text-secondary border border-secondary rounded-circle"
                  style="padding-bottom: 2px"
                >
                  {{ totalCarts }}
                </span>
              </router-link>
            </div>
          </div>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: 'NavBar',
  computed: mapState({
    totalCarts: (state) => state.totalCarts
  })
};
</script>

<style></style>
