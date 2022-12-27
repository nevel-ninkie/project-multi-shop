<template>
  <div class="main">
    <Slider />
    <Featured />
    <Categories />
    <FeaturedProducts />
    <Offers />
  </div>
</template>

<script>
import Slider from './Slider';
import Featured from './Featured';
import Categories from './Categories';
import FeaturedProducts from './FeaturedProducts';
import Offers from './Offers';

export default {
  name: 'HomePage',
  components: {
    Slider,
    Featured,
    Categories,
    FeaturedProducts,
    Offers
  }
};
</script>

<style scoped lang="scss"></style>
