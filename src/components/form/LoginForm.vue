<template>
  <h1>Iniciar Sesión</h1>
    <form @submit.prevent="submitForm">
      <LoginInput
        id="username"
        label="Usuario"
        v-model="username"
        placeholder="Ingresa tu usuario"
      />
      <LoginInput
        id="password"
        label="Contraseña"
        type="password"
        v-model="password"
        placeholder="Ingresa tu contraseña"
      />
      <button type="submit">Iniciar Sesión</button>
    </form>
  </template>
  
  <script>
  import LoginInput from './LoginInput.vue';
  
  export default {
    name: 'LoginForm',
    components: { LoginInput },
    data() {
      return {
        username: '',
        password: ''
      };
    },
    methods: {
      submitForm() {
        if (this.username === 'user' && this.password === 'password') {
          // Verifica que $router esté disponible
          if (this.$router) {
            this.$router.push({ name: 'Home' });
          } else {
            console.error('$router no está disponible');
          }
        } else {
          alert('Credenciales incorrectas');
        }
      }
    }
  };
  </script>
  
  <style scoped>
  /* Estilos como antes */
  </style>
  