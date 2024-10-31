<template>
  <div id="app">
    <Header3/>
    <Body2 />
    <Footer2/>
  </div>
</template>

<script>
// import Header from './components/Header.vue';
// import Body from './components/Body.vue';
// import Footer from './components/Footer.vue';
import Body2 from './components/Body2.vue';
import Footer2 from './components/Footer2.vue';
import Header3 from './components/Header3.vue';

export default {
  name: 'App',
  components: {
    Body2,
    Footer2,
    Header3,
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
