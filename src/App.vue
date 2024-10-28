<template>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
  <!-- <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"> -->
  <div id="app">
    <Header />
    <Body />
    <!-- <Footer /> -->
    <BootstrapFooter/>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Body from './components/Body.vue';
// import Footer from './components/Footer.vue';
import BootstrapFooter from './components/BootstrapFooter.vue';

export default {
  name: 'App',
  components: {
    Header,
    Body,
    // Footer,
    BootstrapFooter,
  },
};
</script>

<style>
#app {
  font-family: 'Times New Roman', Times, serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
