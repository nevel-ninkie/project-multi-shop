<template>
  <div class="container-fluid">
    <div class="row px-xl-5">
      <div class="col-12">
        <nav class="breadcrumb bg-light mb-30">
          <router-link class="breadcrumb-item text-dark" to="/">
            Home
          </router-link>
          <span class="breadcrumb-item active">Contact</span>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BreadcrumbItem'
};
</script>

<style></style>
