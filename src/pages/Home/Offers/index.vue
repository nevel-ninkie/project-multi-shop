<template>
  <div class="container-fluid pt-5 pb-3">
    <div class="row px-xl-5">
      <div v-for="offer in offers" :key="offer.id" class="col-md-6">
        <div class="product-offer mb-30" style="height: 300px">
          <img
            class="img-fluid"
            :src="require(`../../../assets/images/${offer.img}`)"
            alt=""
          />
          <div class="offer-text">
            <h6 class="text-white text-uppercase">{{ offer.discount }}</h6>
            <h3 class="text-white mb-3">{{ offer.type }}</h3>
            <a href="" class="btn btn-primary">Shop Now</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { SLIDER } from '../../../resources/slider';

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Offers',
  data() {
    return {
      offers: SLIDER.offerSlider
    };
  }
};
</script>

<style></style>
