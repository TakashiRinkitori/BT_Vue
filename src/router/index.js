import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue';

import Bai1Day1 from '@/views/Day1/Bai1.vue';
import Bai2Day1 from '@/views/Day1/Bai2.vue';
import Bai3Day1 from '@/views/Day1/Bai3.vue';
import Bai4Day1 from '@/views/Day1/Bai4.vue';
import Bai5Day1 from '@/views/Day1/Bai5.vue';

import Bai1Day2 from '@/views/Day2/Bai1.vue';
import Bai2Day2 from '@/views/Day2/Bai2.vue';
import Bai3Day2 from '@/views/Day2/Bai3.vue';
import Bai4Day2 from '@/views/Day2/Bai4.vue';
import Bai5Day2 from '@/views/Day2/Bai5.vue';

const routes = [
  {path: '/Home', component:HomeView}, 
  {path: '/day1/bai1', component:Bai1Day1},
  {path: '/day1/bai2', component:Bai2Day1},
  {path: '/day1/bai3', component:Bai3Day1},
  {path: '/day1/bai4', component:Bai4Day1},
  {path: '/day1/bai5', component:Bai5Day1},

  {path: '/day2/bai1', component:Bai1Day2},
  {path: '/day2/bai2', component:Bai2Day2},
  {path: '/day2/bai3', component:Bai3Day2},
  {path: '/day2/bai4', component:Bai4Day2},
  {path: '/day2/bai5', component:Bai5Day2},

  {path: '/', redirect: '/Home' } 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
