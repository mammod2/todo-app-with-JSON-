<template>
  <div class="home">
    <FilterNav @filterChange="current = $event" :current="current" />
    <div>
      <div v-if="todos.length">
        <div v-for="todo in filteredTodos" :key="todo.id">
          <SingleTodo
            :todo="todo"
            @deleted="handleDelete"
            @complete="handleComplete"
            @toggleDelete="handleUndo"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SingleTodo from "@/components/SingleTodo.vue";
import FilterNav from "@/components/FilterNav.vue";
// @ is an alias to /src

export default {
  name: "Home",
  components: { SingleTodo, FilterNav },
  data() {
    return {
      todos: [],
      current: "all",
    };
  },
  computed: {
    // showTodos() {
    //   return this.todos.filter((todo) => todo.deleted === false);
    // },
    filteredTodos() {
      if (this.current === "completed") {
        return this.todos.filter((todo) => todo.complete);
      }
      if (this.current === "ongoing") {
        return this.todos.filter((todo) => !todo.complete);
      }
      return this.todos;
    },
  },
  mounted() {
    fetch("http://localhost:3000/todos")
      .then((res) => res.json())
      .then((data) => (this.todos = data))
      .catch((err) => console.log(err.message));
  },
  methods: {
    handleDelete(id) {
      this.todos = this.todos.filter((todo) => {
        return todo.id !== id;
      });
    },
    handleComplete(id) {
      let p = this.todos.find((todo) => {
        return todo.id == id;
      });
      p.complete = !p.complete;
    },
    handleUndo(id) {
      let d = this.todos
        .find((todo) => {
          return todo.id == id;
        })
        .then(() => {
          d.deleted = !d.deleted;
          this.$router.push("/");
        });
    },
  },
};
</script>
