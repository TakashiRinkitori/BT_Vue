<template>
    <div>
      <h2>Bài 3:Danh sách mục</h2>
      <ul>
        <li v-for="(item, index) in items" :key="index" v-bind:style="{ color: item.color }">
          {{ item.name }}
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Day1Bai3',
    data() {
      return {
        items: [
          { name: 'Mục 1', color: 'red' },
          { name: 'Mục 2', color: 'green' },
          { name: 'Mục 3', color: 'blue' },
          { name: 'Mục 4', color: 'orange' },
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    font-size: 18px;
    margin: 5px 0;
  }
  </style>
  