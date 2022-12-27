<template>
  <div class="container-fluid pt-5 pb-3">
    <h2 class="section-title position-relative text-uppercase mx-xl-5 mb-4">
      <span class="bg-secondary title pe-3">Featured Products</span>
    </h2>
    <div class="row px-xl-5">
      <div
        v-for="product in products"
        :key="product.id"
        class="col-lg-3 col-md-4 col-sm-6 pb-1"
      >
        <div class="product-item bg-light mb-4">
          <div class="product-img position-relative overflow-hidden">
            <img
              class="img-fluid w-100"
              :src="require(`../../../assets/images/${product.img}`)"
              alt=""
            />
            <div class="product-action">
              <div
                class="btn btn-outline-dark btn-square me-2 d-flex justify-content-center align-items-center"
              >
                <i class="fa fa-shopping-cart"></i>
              </div>
              <div
                class="btn btn-outline-dark btn-square me-2 d-flex justify-content-center align-items-center"
              >
                <i class="far fa-heart"></i>
              </div>
              <div
                class="btn btn-outline-dark btn-square me-2 d-flex justify-content-center align-items-center"
              >
                <i class="fa fa-sync-alt"></i>
              </div>
              <div
                class="btn btn-outline-dark btn-square d-flex justify-content-center align-items-center"
              >
                <i class="fa fa-search"></i>
              </div>
            </div>
          </div>
          <div class="text-center py-4">
            <div class="h6 text-decoration-none text-truncate">
              {{ product.name }}
            </div>
            <div class="d-flex align-items-center justify-content-center mt-2">
              <h5>${{ product.newPrice }}</h5>
              <h6 class="text-muted ms-2">
                <del>${{ product.oldPrice }}</del>
              </h6>
            </div>
            <div class="d-flex align-items-center justify-content-center mb-1">
              <small
                v-for="(_star, idx) in product.star"
                :key="idx"
                class="fa fa-star text-primary ms-1"
              ></small>
              <small>({{ product.amount }})</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { PRODUCTS } from '../../../resources/products';

export default {
  name: 'FeaturedProducts',
  data() {
    return {
      products: PRODUCTS
    };
  }
};
</script>

<style
  scoped
  lang="scss"
  src="../../../styles/components/products/_styles.scss"
></style>
