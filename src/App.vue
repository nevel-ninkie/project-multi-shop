<template>
  <div class="app">
    <Header />
    <NavBar />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

export default {
  name: 'App',
  components: {
    Header,
    NavBar,
    Footer
  }
};
</script>
