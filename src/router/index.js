// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import LoginForm from '../components/form/LoginForm.vue';
import HomePage from '../components/homepage/HomePage.vue'; // Página de destino después del login

const routes = [
  {
    path: '/',
    name: 'Login',
    component: LoginForm
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage // Componente de la página de inicio
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
