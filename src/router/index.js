import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../pages/Home';
import ContactPage from '../pages/Contact';
import CartPage from '../pages/Cart';
import ErrorPage from '../pages/Errors';

const routes = [
  {
    path: '/',
    component: HomePage
  },
  {
    path: '/contact',
    component: ContactPage
  },
  {
    path: '/cart',
    component: CartPage
  },
  {
    path: '/:pathMatch(.*)*',
    component: ErrorPage
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
