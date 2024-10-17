<template>
  <div id="app">
    <Header />
    <nav>
      <router-link to="/day1" @click="toggleDay1Links">Ngày 1 Vue </router-link>
      <div v-if="showDay1Links">
        <Day1Links @close="showDay1Links = false" /> 
      </div>
      <router-link to="/day2" @click="toggleDay2Links">Ngày 2 Vue</router-link>
      <div v-if="showDay2Links">
        <Day2Links @close="showDay2Links = false" /> 
      </div>    
      <router-link to="/home">Trang Chủ</router-link>
    </nav>
    <main>
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Day1Links from './components/Day1Links.vue';
import Day2Links from './components/Day2Links.vue';

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    Day1Links,
    Day2Links,
  },
  data() {
    return {
      showDay1Links: false,
      showDay2Links: false,
    };
  },
  methods: {
    toggleDay1Links() {
      this.showDay1Links = !this.showDay1Links;
    },
    toggleDay2Links() {
      this.showDay2Links = !this.showDay2Links;
    },
  },
};
</script>

<style>
#app {
  font-family: 'Times New Roman', Times, serif;
  text-align: left;
  color: #2c3e50;
  margin-top: 5px;
}
nav {
  margin-bottom: 20px;
}
nav a {
  margin-right: 15px;
  text-decoration: none;
  color: #2c3e50;
}
nav a:hover {
  text-decoration: underline;
}
</style>
