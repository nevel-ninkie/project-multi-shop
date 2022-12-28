import { createStore } from 'vuex';
import callApi from '../api';
import { v4 as uuid } from 'uuid';

const store = createStore({
  state: {
    totalCarts: 0
  },
  mutations: {
    ADD_TO_CART(state, product) {
      callApi('carts', 'get', null).then((res) => {
        if (res && res.status === 200 && res.data) {
          state.totalCarts = res.data.length;
          const cart = res.data.find((cart) => cart.productId === product.id);
          if (cart && cart.id) {
            callApi(`carts/${cart.id}`, 'put', {
              ...cart,
              count: cart.count + 1
            });
          } else {
            callApi('carts', 'post', {
              id: uuid(),
              productId: product.id,
              name: product.name,
              price: product.newPrice,
              count: 1,
              img: product.img
            });
          }
        }
      });
    }
  }
});

export default store;
