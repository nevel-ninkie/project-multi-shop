<template>
  <div class="container-fluid bg-dark text-secondary mt-5 pt-5">
    <div class="row px-xl-5 pt-5">
      <div class="col-lg-4 col-md-12 mb-5 pr-3 pr-xl-5">
        <h5 class="text-secondary text-uppercase mb-4">Get In Touch</h5>
        <p class="mb-4">
          No dolore ipsum accusam no lorem. Invidunt sed clita kasd clita et et
          dolor sed dolor. Rebum tempor no vero est magna amet no
        </p>
        <p class="mb-2">
          <i class="fa fa-map-marker-alt text-primary me-3"></i>123 Street, New
          York, USA
        </p>
        <p class="mb-2">
          <i class="fa fa-envelope text-primary me-3"></i>info@example.com
        </p>
        <p class="mb-0">
          <i class="fa fa-phone-alt text-primary me-3"></i>+012 345 67890
        </p>
      </div>
      <div class="col-lg-8 col-md-12">
        <div class="row">
          <div class="col-md-4 mb-5">
            <h5 class="text-secondary text-uppercase mb-4">Quick Shop</h5>
            <div class="d-flex flex-column justify-content-start">
              <router-link class="text-secondary mb-2" to="">
                <i class="fa fa-angle-right me-2"></i>
                Home
              </router-link>
              <router-link class="text-secondary mb-2" to="">
                <i class="fa fa-angle-right me-2"></i>
                Our Shop
              </router-link>
              <router-link class="text-secondary mb-2" to="">
                <i class="fa fa-angle-right me-2"></i>
                Shop Detail
              </router-link>
              <router-link class="text-secondary mb-2" to="">
                <i class="fa fa-angle-right me-2"></i>
                Shopping Cart
              </router-link>
              <router-link class="text-secondary mb-2" to="">
                <i class="fa fa-angle-right me-2"></i>
                Checkout
              </router-link>
              <router-link class="text-secondary" to="">
                <i class="fa fa-angle-right me-2"></i>
                Contact Us
              </router-link>
            </div>
          </div>
          <div class="col-md-4 mb-5">
            <h5 class="text-secondary text-uppercase mb-4">My Account</h5>
            <div class="d-flex flex-column justify-content-start">
              <router-link class="text-secondary mb-2" to="">
                <i class="fa fa-angle-right me-2"></i>
                Home
              </router-link>
              <router-link class="text-secondary mb-2" to="">
                <i class="fa fa-angle-right me-2"></i>
                Our Shop
              </router-link>
              <router-link class="text-secondary mb-2" to="">
                <i class="fa fa-angle-right me-2"></i>
                Shop Detail
              </router-link>
              <router-link class="text-secondary mb-2" to="">
                <i class="fa fa-angle-right me-2"></i>
                Shopping Cart
              </router-link>
              <router-link class="text-secondary mb-2" to="">
                <i class="fa fa-angle-right me-2"></i>
                Checkout
              </router-link>
              <router-linka class="text-secondary" to="">
                <i class="fa fa-angle-right me-2"></i>
                Contact Us
              </router-linka>
            </div>
          </div>
          <div class="col-md-4 mb-5">
            <h5 class="text-secondary text-uppercase mb-4">Newsletter</h5>
            <p>Duo stet tempor ipsum sit amet magna ipsum tempor est</p>
            <div class="input-group">
              <input
                type="text"
                class="form-control"
                placeholder="Your Email Address"
              />
              <div class="input-group-append">
                <button class="btn btn-primary">Sign Up</button>
              </div>
            </div>
            <h6 class="text-secondary text-uppercase mt-4 mb-3">Follow Us</h6>
            <div class="d-flex">
              <router-link class="btn btn-primary btn-square me-2" to="">
                <i class="fab fa-twitter"></i>
              </router-link>
              <router-link class="btn btn-primary btn-square me-2" to="">
                <i class="fab fa-facebook-f"></i>
              </router-link>
              <router-link class="btn btn-primary btn-square me-2" to="">
                <i class="fab fa-linkedin-in"></i>
              </router-link>
              <router-link class="btn btn-primary btn-square" to="">
                <i class="fab fa-instagram"></i>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="row border-top mx-xl-5 py-4"
      style="border-color: rgba(256, 256, 256, 0.1) !important"
    >
      <div class="col-md-6 px-xl-0">
        <p class="mb-md-0 text-start text-secondary">
          &copy;
          <router-link class="text-primary" to="">Domain</router-link>
          . All Rights Reserved. Designed by
          <router-link class="text-primary" to="">HTML Codex</router-link>
        </p>
      </div>
      <div class="col-md-6 px-xl-0 text-end">
        <img class="img-fluid" src="../../assets/images/payments.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Footer'
};
</script>

<style></style>
