<template>
  <div id="app">
    <h1>Iniciar Sesión</h1>
    <router-view />  <!-- Aquí se renderizarán los componentes según la ruta -->
  </div>
</template>

<script>
// import LoginForm from './components/form/LoginForm.vue'

export default {
  name: 'App',
  components: {
    // LoginForm
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}
</style>
