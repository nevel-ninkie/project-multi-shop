<template>
  <div class="container-fluid">
    <div class="row px-xl-5">
      <div class="col-12">
        <nav class="breadcrumb bg-light mb-30">
          <router-link class="breadcrumb-item text-dark" to="/">
            Home
          </router-link>
          <span class="breadcrumb-item active">{{ breadcrumb }}</span>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BreadcrumbItem',
  props: {
    breadcrumb: String
  }
};
</script>

<style></style>
