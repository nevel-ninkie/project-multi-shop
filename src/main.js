import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { createApp } from 'vue';
import App from './App.vue';
import './App.scss';
import store from './store';
import router from './router';

const app = createApp(App);

app.use(store);
app.use(router);
app.mount('#app');
