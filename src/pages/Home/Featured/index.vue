<template>
  <div class="container-fluid pt-5">
    <div class="row px-xl-5 pb-3">
      <div
        v-for="feature in features"
        :key="feature.id"
        class="col-lg-3 col-md-6 col-sm-12 pb-1"
      >
        <div
          class="d-flex align-items-center bg-light mb-4"
          style="padding: 30px"
        >
          <h1 :class="['fa text-primary m-0 me-3', feature.icon]"></h1>
          <h5 class="font-weight-semi-bold m-0">{{ feature.title }}</h5>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { FEATURED } from '../../../resources/featured';

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Featured',
  data() {
    return {
      features: FEATURED
    };
  }
};
</script>

<style></style>
