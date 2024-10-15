<template>
    <div>
      <h2>Giá trị đếm: {{ counter }}</h2>
      <h3>Giá trị gấp đôi: {{ doubledCounter }}</h3>
      <button @click="increment">Tăng</button>
      <button @click="decrement">Giảm</button>
    </div>
  </template>
  
  <script>
  import { ref, computed } from 'vue';
  
  export default {
    name: 'Day2Bai1',
    setup() {
      const counter = ref(0);
  
      const doubledCounter = computed(() => counter.value * 2);
  
      const increment = () => {
        counter.value++;
      };
  
      const decrement = () => {
        counter.value--;
      };
  
      return {
        counter,
        doubledCounter,
        increment,
        decrement
      };
    }
  };
  </script>
  
  <style scoped>
  button {
    margin: 5px;
  }
  </style>
  