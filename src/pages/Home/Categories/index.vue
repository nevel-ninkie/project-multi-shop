<template>
  <div class="container-fluid pt-5">
    <h2 class="section-title position-relative text-uppercase mx-xl-5 mb-4">
      <span class="bg-secondary title pe-3">Categories</span>
    </h2>
    <div class="row px-xl-5 pb-3">
      <div
        v-for="categorie in categories"
        :key="categorie.id"
        class="col-lg-3 col-md-4 col-sm-6 pb-1"
      >
        <router-link class="text-decoration-none" to="">
          <div class="cat-item d-flex align-items-center mb-4">
            <div class="overflow-hidden" style="width: 100px; height: 100px">
              <img
                class="img-fluid"
                :src="require(`../../../assets/images/${categorie.img}`)"
                alt=""
              />
            </div>
            <div class="ps-3">
              <h6>{{ categorie.name }}</h6>
              <small class="text-body">{{ categorie.count }} Products</small>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import callApi from '../../../api';
import { ref } from 'vue';

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Categories',
  setup() {
    const categories = ref([]);
    const fetch = () =>
      callApi('categories', 'get', null).then((res) => {
        if (res && res.status === 200 && res.data) {
          return (categories.value = res.data);
        }
      });
    fetch();
    return {
      categories
    };
  }
};
</script>

<style
  scoped
  lang="scss"
  src="../../../styles/components/categories/_styles.scss"
></style>
