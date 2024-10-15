<template>
    <div>
      <h2>Danh sách Nhiệm vụ</h2>
      <table>
        <thead>
          <tr>
            <th>Hoàn thành</th>
            <th>Nhiệm vụ</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in tasks" :key="index" :style="{ textDecoration: item.completed ? 'line-through' : 'none' }">
            <td>
              <input type="checkbox" v-model="item.completed" />
            </td>
            <td>{{ item.task }}</td>
            <td>
              <button @click="removeTask(index)">Xóa</button>
            </td>
          </tr>
        </tbody>
      </table>
      <input v-model="newTask" placeholder="Thêm nhiệm vụ mới" />
      <button @click="addTask">Thêm</button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Day1Bai5',
    data() {
      return {
        tasks: [],
        newTask: ''
      };
    },
    methods: {
      addTask() {
        if (this.newTask.trim()) {
          this.tasks.push({ task: this.newTask, completed: false });
          this.newTask = '';
        }
      },
      removeTask(index) {
        this.tasks.splice(index, 1);
      }
    }
  };
  </script>
  
  <style scoped>
  table {
    width: 100%;
    border-collapse: collapse;
  }
  th, td {
    padding: 10px;
    border: 1px solid #ddd;
    text-align: left;
  }
  input {
    margin-top: 10px;
    padding: 5px;
  }
  button {
    margin-left: 5px;
  }
  </style>
  