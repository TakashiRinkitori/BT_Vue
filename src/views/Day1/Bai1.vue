<template>
    <div>
        <h3> Bài 1</h3>
        <h3>{{ title }}</h3>
        <button @click="changeTitle">Thay đổi tiêu đề</button>
    </div>
</template>
  
  <script>
  export default {
    name: 'Day1Bai1',
    data() {
      return {
        title: 'Tiêu đề ban đầu'
      };
    },
    methods: {
      changeTitle() {
        this.title = 'Tiêu đề đã thay đổi!';
      }
    }
  };
  </script>
  
  <style scoped>
    h1 {
        color: #42b983;
    }
    button {
        padding: 10px 15px;
        font-size: 16px;
        cursor: pointer;
    }
  </style>
  