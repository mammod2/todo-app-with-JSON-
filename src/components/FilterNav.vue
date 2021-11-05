<template>
  <nav class="filter-nav">
    <button @click="updateFilter('all')" :class="{ active: current === 'all' }">
      View All
    </button>
    <button
      @click="updateFilter('completed')"
      :class="{ active: current === 'completed' }"
      class="completed-btn"
    >
      Completed
    </button>
    <button
      @click="updateFilter('ongoing')"
      :class="{ active: current === 'ongoing' }"
    >
      Ongoing
    </button>
  </nav>
</template>

<script>
export default {
  props: ["current"],
  methods: {
    updateFilter(type) {
      this.$emit("filterChange", type);
      console.log(this.updateFilter(type));
    },
  },
};
</script>

<style scoped>
.filter-nav {
  display: flex;
  justify-items: start;
}
.filter-nav button {
  background: none;
  border: none;
  color: #bbb;
  outline: none;
  font-size: 12px;
  text-transform: uppercase;
  margin-right: 10px;
  letter-spacing: 1px;
  font-weight: bold;
  cursor: pointer;
}
.filter-nav button.active {
  color: red;
}
.filter-nav .completed-btn.active {
  color: green;
}
</style>
