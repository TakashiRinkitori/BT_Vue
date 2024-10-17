<template>
    <div>
      <h2>Danh Sách Công Việc</h2>
      <input v-model="newTask" placeholder="Nhập công việc mới" />
      <button @click="addTask">Thêm</button>
  
      <table>
        <thead>
          <tr>
            <th>Công Việc</th>
            <th>Hành Động</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(task, index) in tasks" :key="index">
            <td>
              <input
                type="text"
                v-model="task.title"
                @blur="updateTask(index, task.title)"
              />
            </td>
            <td>
              <button @click="removeTask(index)">Xóa</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  
  export default {
    name: 'Day2Bai3',
    setup() {
      const tasks = ref([]); 
      const newTask = ref('');

      const addTask = () => {
        if (newTask.value.trim()) {
          tasks.value.push({ title: newTask.value });
          newTask.value = ''; // Xóa input sau khi thêm
        }
      };
  
      const removeTask = (index) => {
        tasks.value.splice(index, 1);
      };
  
      const updateTask = (index, title) => {
        tasks.value[index].title = title;
      };
  
      return {
        tasks,
        newTask,
        addTask,
        removeTask,
        updateTask,
      };
    },
  };
  </script>
  
  <style scoped>
  input {
    margin-bottom: 10px;
  }
  button {
    margin-left: 5px;
  }
  table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
  }
  th, td {
    border: 1px solid #ccc;
    padding: 8px;
    text-align: left;
  }
  th {
    background-color: #f4f4f4;
  }
  </style>
  