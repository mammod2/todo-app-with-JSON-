import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import AddTodo from "../views/AddTodo.vue";
import EditTodo from "../views/EditTodo.vue";
import DeletedTodos from "../views/DeletedTodos.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/add",
    name: "AddTodo",
    component: AddTodo,
  },
  {
    path: "/edit/:id",
    name: "EditTodo",
    component: EditTodo,
    props: true,
  },
  {
    path: "/deletedTodos",
    name: "DeletedTodos",
    component: DeletedTodos,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
