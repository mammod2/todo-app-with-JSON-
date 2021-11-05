<template>
  <Navbar />
  <router-view />
</template>

<style>
* {
  box-sizing: border-box;
}

body {
  background: #1a1e23;
  font-family: "Lato", sans-serif;
  -webkit-font-smoothing: antialiased;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  max-width: 600px;
  margin: 0 auto;

  color: #555;
}
</style>
<script>
import Navbar from "./components/Navbar.vue";
export default {
  components: { Navbar },
};
</script>
