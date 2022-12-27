<template>
  <BreadcrumbItem />
  <ContactItem />
</template>

<script>
import BreadcrumbItem from './Breadcrumb';
import ContactItem from './ContactItem';

export default {
  name: 'ContactPage',
  components: {
    BreadcrumbItem,
    ContactItem
  }
};
</script>

<style scoped lang="scss"></style>
