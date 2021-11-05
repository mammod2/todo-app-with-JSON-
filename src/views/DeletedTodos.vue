<template>
  <div class="home">
    <div>
      <div v-if="todos.length">
        <div v-for="todo in showDeletedTodos" :key="todo.id">
          <SingleTodo :todo="todo" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SingleTodo from "@/components/SingleTodo.vue";
// @ is an alias to /src

export default {
  name: "Home",
  components: { SingleTodo },
  data() {
    return {
      todos: [],
    };
  },
  computed: {
    showDeletedTodos() {
      return this.todos.filter((todo) => todo.deleted === true);
    },
  },
  mounted() {
    fetch("http://localhost:3000/todos")
      .then((res) => res.json())
      .then((data) => (this.todos = data))
      .catch((err) => console.log(err.message));
  },
};
</script>
