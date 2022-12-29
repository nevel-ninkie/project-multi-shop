<template>
  <div class="container-fluid">
    <div class="row px-xl-5">
      <div class="col-lg-8 table-responsive mb-5">
        <table
          class="table table-light table-borderless table-hover text-center mb-0"
        >
          <thead class="thead-dark">
            <tr>
              <th>Products</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody class="align-middle">
            <tr v-for="cart in carts" :key="cart.id">
              <td class="align-middle">
                <img
                  :src="require(`../../../assets/images/${cart.img}`)"
                  alt=""
                  style="width: 50px"
                />
                {{ cart.name }}
              </td>
              <td class="align-middle">${{ cart.price }}</td>
              <td class="align-middle">
                <div class="input-group quantity mx-auto" style="width: 100px">
                  <div class="input-group-btn">
                    <button class="btn btn-sm btn-primary btn-minus">
                      <i class="fa fa-minus"></i>
                    </button>
                  </div>
                  <input
                    type="text"
                    class="form-control form-control-sm bg-secondary border-0 text-center"
                    :value="cart.count"
                  />
                  <div class="input-group-btn">
                    <button class="btn btn-sm btn-primary btn-plus">
                      <i class="fa fa-plus"></i>
                    </button>
                  </div>
                </div>
              </td>
              <td class="align-middle">
                ${{ getTotal(cart.price, cart.count) }}
              </td>
              <td class="align-middle">
                <button class="btn btn-sm btn-danger">
                  <i class="fa fa-times"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="col-lg-4">
        <h5 class="section-title position-relative text-uppercase mb-3">
          <span class="bg-secondary title pe-3">Cart Summary</span>
        </h5>
        <div class="bg-light p-30 mb-5">
          <div class="border-bottom pb-2">
            <div class="d-flex justify-content-between mb-3">
              <h6>Subtotal</h6>
              <h6>${{ subtotal.toLocaleString('en-US') }}</h6>
            </div>
            <div class="d-flex justify-content-between">
              <h6 class="font-weight-medium">Shipping</h6>
              <h6 class="font-weight-medium">${{ shippingFee }}</h6>
            </div>
          </div>
          <div class="pt-2">
            <div class="d-flex justify-content-between mt-2">
              <h5>Total</h5>
              <h5>${{ summary }}</h5>
            </div>
            <button
              class="btn btn-block btn-primary font-weight-bold my-3 py-3"
            >
              Proceed To Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { CART } from '../../../resources/cart';

export default {
  name: 'CartItem',
  setup() {
    const shippingFee = 10;
    const carts = CART;
    const getTotal = (price, count) => (price * count).toLocaleString('en-US');
    const subtotal = carts.reduce((acc, num) => acc + num.count * num.price, 0);
    const summary = (subtotal + shippingFee).toLocaleString('en-US');

    return {
      shippingFee,
      carts,
      getTotal,
      subtotal,
      summary
    };
  }
};
</script>

<style></style>
