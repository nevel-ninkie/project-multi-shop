<template>
  <div class="container-fluid mb-3">
    <div class="row px-xl-5">
      <div class="col-lg-8">
        <div
          id="header-carousel"
          class="carousel slide carousel-fade mb-30 mb-lg-0"
          data-ride="carousel"
        >
          <div class="carousel-inner">
            <div
              v-for="slider in sliders"
              :class="[
                'carousel-item position-relative',
                indexSlide === slider.id ? 'active' : ''
              ]"
              style="height: 430px"
              :key="slider.id"
            >
              <img
                class="position-absolute w-100 h-100"
                :src="require(`../../../assets/images/${slider.img}`)"
                style="object-fit: cover"
              />
              <div
                class="carousel-caption d-flex flex-column align-items-center justify-content-center"
              >
                <div class="p-3" style="max-width: 700px">
                  <h1
                    class="display-4 text-white mb-3 animate__animated animate__fadeInDown"
                  >
                    {{ slider.title }}
                  </h1>
                  <p class="mx-md-5 px-5 animate__animated animate__bounceIn">
                    {{ slider.content }}
                  </p>
                  <router-link
                    class="btn btn-outline-light py-2 px-4 mt-3 animate__animated animate__fadeInUp"
                    :to="slider.path"
                  >
                    Shop Now
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-4">
        <div
          v-for="offer in offers"
          :key="offer.id"
          class="product-offer mb-30"
          style="height: 200px"
        >
          <img
            class="img-fluid"
            :src="require(`../../../assets/images/${offer.img}`)"
            alt=""
          />
          <div class="offer-text">
            <h6 class="text-white text-uppercase">{{ offer.discount }}</h6>
            <h3 class="text-white mb-3">{{ offer.type }}</h3>
            <router-link to="" class="btn btn-primary">Shop Now</router-link>
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
  name: 'Slider',
  data() {
    return {
      sliders: SLIDER.mainSlider,
      offers: SLIDER.offerSlider,
      indexSlide: 1
    };
  }
};
</script>

<style></style>
