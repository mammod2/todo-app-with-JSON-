<template>
  <form @submit.prevent="handleSubmit">
    <label>Title</label>
    <input v-model="title" type="text" required />
    <label>Details</label>
    <textarea v-model="details" required></textarea>
    <button>Add Todo</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      details: "",
    };
  },
  methods: {
    handleSubmit() {
      let todo = {
        id: window.crypto.randomUUID(),
        title: this.title,
        details: this.details,
        complete: false,
        deleted: false,
      };
      fetch("http://localhost:3000/todos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(todo),
      })
        .then(() => {
          this.$router.push({ name: "Home" });
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>

<style scoped>
form {
  background: wheat;
  padding: 20px;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;
}
label {
  display: block;
  color: black;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 1px;
  margin: 20px 0 10px 0;
}
input {
  padding: 10px;
  border: 0;
  border-bottom: 1px solid #ddd;
  width: 100%;
  box-sizing: border-box;
}
textarea {
  padding: 10px;
  border: 0;
  border-bottom: 1px solid #ddd;
  width: 100%;
  box-sizing: border-box;
}
button {
  display: block;
  margin: 20px auto 0;
  background: slategrey;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 6px;
  font-size: 18px;
  box-shadow: rgba(0, 0, 0, 0.39) 0px 5px 15px 0px;
}
button:hover {
  background: rgb(90, 143, 196);
}
</style>
