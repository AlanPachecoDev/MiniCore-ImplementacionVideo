<template>
  <div id="app">
    <nav>
      <router-link to="/list">Clientes</router-link> |
      <router-link to="/filter">Filtrar</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

<!-- <template>
  <div id="app" class="container is-max-desktop">
    <router-view />
  </div>
</template>
  
<script>
export default {
  name: "App",
};
</script>
  
<style>
/* import style bulma */
@import "~bulma/css/bulma.css";
</style> -->
