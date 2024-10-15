<template>
    <div>
      <h2>Đăng Ký</h2>
      <form @submit.prevent="handleSubmit">
        <div>
          <label for="name">Tên:</label>
          <input type="text" id="name" v-model="formState.name" />
        </div>
        <div>
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="formState.email" />
        </div>
        <button type="submit">Gửi</button>
      </form>
      <div v-if="submitted">
        <h3>Thông tin đã gửi:</h3>
        <p>Tên: {{ formState.name }}</p>
        <p>Email: {{ formState.email }}</p>
      </div>
    </div>
  </template>
  
  <script>
  import { ref, reactive } from 'vue';
  
  export default {
    name: 'Day2Bai2',
    setup() {
      const formState = reactive({
        name: '',
        email: '',
      });
  
      const submitted = ref(false);
  
      const handleSubmit = () => {
        submitted.value = true; 
        console.log('Form submitted:', formState);
      };
  
      return {
        formState,
        submitted,
        handleSubmit,
      };
    },
  };
  </script>
  
  <style scoped>
  form {
    display: flex;
    flex-direction: column;
    max-width: 300px;
  }
  label {
    margin: 5px 0;
  }
  input {
    margin-bottom: 10px;
  }
  button {
    margin-top: 10px;
  }
  </style>
  