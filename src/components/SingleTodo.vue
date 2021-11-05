<template>
  <div class="todo" :class="{ complete: todo.complete }">
    <div class="actions">
      <h3 @click.prevent="showDetails = !showDetails">{{ todo.title }}</h3>
      <div class="icons">
        <router-link :to="{ name: 'EditTodo', params: { id: todo.id } }">
          <span class="material-icons"> edit </span>
        </router-link>
        <span @click="toggleComplete" class="material-icons tick"> done </span>

        <div :class="{ shake: noActivated }" @click="toggleDelete(true)">
          <span @click="noActivated = !noActivated" class="material-icons">
            delete
          </span>
          <span v-if="noActivated">Oh no!</span>
        </div>
        <span
          v-if="todo.deleted"
          @click="toggleDelete(false)"
          class="material-icons"
        >
          undo
        </span>
      </div>
    </div>
    <div v-if="showDetails" class="details">
      <p>{{ todo.details }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["todo"],
  data() {
    return {
      noActivated: false,
      showDetails: false,
      url: " http://localhost:3000/todos/" + this.todo.id,
    };
  },
  methods: {
    toggleComplete() {
      fetch(this.url, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ complete: !this.todo.complete }),
      })
        .then(() => {
          this.$emit("complete", this.todo.id);
        })
        .catch((err) => console.log(err));
    },
    toggleDelete(value) {
      fetch(this.url, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ deleted: value }),
      })
        .then(() => this.$emit("deleted", this.todo.id))
        .then(() => this.$router.push("/"))
        .catch((err) => console.log(err));
    },
  },
};
</script>

<style scoped>
.todo {
  margin: 20px auto;
  background: white;
  padding: 10px 20px;
  border-radius: 4px;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.05);
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;
  transition: 0.25s;
}
.todo:hover {
  transform: scale(1.025);
}
h3 {
  cursor: pointer;
}
.actions {
  display: flex;
  justify-content: space-between;
}
.icons {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.material-icons {
  font-size: 24px;
  margin-left: 10px;
  color: #bbb;
  cursor: pointer;
}
.material-icons:hover {
  color: darkslategrey;
}
.todo.complete {
  border-left: none;
  box-shadow: rgba(3, 0, 209, 0.3) 0px 19px 38px,
    rgba(3, 0, 209, 0.22) 0px 15px 12px;
}
.todo.complete .tick {
  color: rgb(3, 0, 209);
}
.shake {
  animation: shake 2.5s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
  perspective: 1000px;
}

@keyframes shake {
  10%,
  90% {
    transform: translate3d(-1px, 0, 0);
  }

  20%,
  80% {
    transform: translate3d(2px, 0, 0);
  }

  30%,
  50%,
  70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%,
  60% {
    transform: translate3d(4px, 0, 0);
  }
}
</style>
