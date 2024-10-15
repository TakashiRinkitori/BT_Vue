<template>
  <div>
    <router-link to="/day1/bai1" @click="closeMenu">Bài 1</router-link>
    <router-link to="/day1/bai2" @click="closeMenu">Bài 2</router-link>
    <router-link to="/day1/bai3" @click="closeMenu">Bài 3</router-link>
    <router-link to="/day1/bai4" @click="closeMenu">Bài 4</router-link>
    <router-link to="/day1/bai5" @click="closeMenu">Bài 5</router-link>
  </div>
</template>

<script>
export default {
  name: 'Day1Links',
  methods: {
    closeMenu() {
      this.$emit('close');
    },
  },
};
</script>

<style scoped>
nav a {
  display: block;
  margin: 5px 0;
}
</style>
