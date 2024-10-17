<template>
    <div>
      <h1> Bài 5Quản lý Nhiệm vụ</h1>
      
      <form @submit.prevent="handleSubmit">
        <input v-model="taskText" placeholder="Nhập nhiệm vụ" />
        <button type="submit">{{ isEdit ? 'Cập nhật' : 'Thêm' }}</button>
      </form>
  
      <table>
        <thead>
          <tr>
            <th>Nhiệm vụ</th>
            <th>Thao tác</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="task in tasks" :key="task.id">
            <td>{{ task.text }}</td>
            <td>
              <button @click="deleteTask(task.id)">Xóa</button>
              <button @click="selectTask(task)">Chỉnh sửa</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  import { ref, computed, watch } from 'vue';
  
  export default {
    name: 'Day2Bai5',
  
    setup() {
      const tasks = ref([]);
      const taskText = ref('');
      const currentTask = ref(null);
  
      const isEdit = computed(() => !!currentTask.value);
  
      const handleSubmit = () => {
        if (isEdit.value) {
          editTask({ ...currentTask.value, text: taskText.value });
        } else {
          addTask(taskText.value);
        }
        taskText.value = ''; // Reset input
      };
  
      const addTask = (task) => {
        tasks.value.push({ id: Date.now(), text: task });
      };
  
      const deleteTask = (id) => {
        tasks.value = tasks.value.filter(task => task.id !== id);
      };
  
      const selectTask = (task) => {
        currentTask.value = task;
        taskText.value = task.text; 
      };
  
      const editTask = (task) => {
        const index = tasks.value.findIndex(t => t.id === task.id);
        if (index !== -1) {
          tasks.value[index].text = task.text;
        }
        currentTask.value = null; 
      };
  
      watch(currentTask, (newTask) => {
        taskText.value = newTask ? newTask.text : '';
      });
  
      return {
        tasks,
        taskText,
        isEdit,
        handleSubmit,
        deleteTask,
        selectTask,
      };
    },
  };
  </script>
  
  <style scoped>
  table {
    width: 100%;
    border-collapse: collapse;
  }
  
  th, td {
    padding: 8px;
    text-align: left;
    border: 1px solid #ddd;
  }
  
  th {
    background-color: #f2f2f2;
  }
  </style>
  