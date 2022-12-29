<template>
  <BreadcrumbItem breadcrumb="Contact" />
  <ContactItem />
</template>

<script>
import BreadcrumbItem from '../../components/Breadcrumb';
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
