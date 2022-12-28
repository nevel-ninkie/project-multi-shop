<template>
  <BreadcrumbItem breadcrumb="Shopping Cart" />
  <CartItem />
</template>

<script>
import BreadcrumbItem from '../../components/Breadcrumb';
import CartItem from './CartItem';

export default {
  name: 'CartPage',
  components: {
    BreadcrumbItem,
    CartItem
  }
};
</script>

<style scoped lang="scss"></style>
