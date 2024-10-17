<template>
    <div>
      <h1>Danh sách Pokémon</h1>
      <ul>
        <li v-for="pokemon in pokemons" :key="pokemon.name">{{ pokemon.name }}</li>
      </ul>
    </div>
  </template>
  
  <script>
  import { ref, onMounted, onUnmounted } from 'vue';
  import axios from 'axios';
  
  export default {
    name: 'Day2Bai4',
  
    setup() {
      const pokemons = ref([]);
  
      onMounted(async () => {
        try {
          const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=10'); 
          pokemons.value = response.data.results; 
        } catch (error) {
          console.error('Error fetching data:', error);
        }
  
        window.addEventListener('resize', handleResize);
      });
  
      onUnmounted(() => {
        window.removeEventListener('resize', handleResize);
      });
  
      const handleResize = () => {
        console.log('Window resized:', window.innerWidth, window.innerHeight);
      };
  
      return {
        pokemons,
      };
    },
  };
  </script>
  