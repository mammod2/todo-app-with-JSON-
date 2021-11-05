<template>
  <nav class="main-nav">
    <router-link :to="{ name: 'Home' }">Todo </router-link>
    <router-link :to="{ name: 'AddTodo' }">Add new Todo</router-link>
    <router-link :to="{ name: 'DeletedTodos' }">Deleted Todos</router-link>
  </nav>
</template>

<script>
export default {};
</script>

<style scoped>
.main-nav {
  text-align: center;
  margin: 40px auto;
}
.main-nav a {
  display: inline-block;
  text-decoration: none;
  margin: 0 10px;
  color: #999;
  font-size: 18px;
}
a.router-link-active {
  border-bottom: 2px solid green;
  padding-bottom: 4px;
}
</style>
