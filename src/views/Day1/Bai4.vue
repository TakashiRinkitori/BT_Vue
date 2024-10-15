<template>
    <div>
      <h2>Bài 4: Máy tính</h2>
      <input v-model="number" type="number" placeholder="Nhập số" />
      <p>Giá trị gốc: {{ number }}</p>
      <p>Giá trị bình phương: {{ doubleValue }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Day1Bai4',
    data() {
      return {
        number: 0
      };
    },
    computed: {
      doubleValue() {
        return this.number * this.number;
      }
    }
  };
  </script>
  
  <style scoped>
  input {
    padding: 10px;
    margin: 10px 0;
    font-size: 16px;
  }
  p {
    font-size: 18px;
  }
  </style>
  