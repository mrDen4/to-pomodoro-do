<template>
  <input
    type="text"
    class="todo-list__inp"
    :value="inputData"
    @input="updateTodoInput"
  />
  <button class="todo-list__btn" @click="addTodo(inputData)">
    Add new todo
  </button>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  methods: {
    ...mapMutations({ addTodo: "ADD_TODO" }),
    updateTodoInput(e) {
      this.$store.commit("updateTodoInput", e.target.value);
    },
  },
  computed: {
    ...mapGetters({ inputData: "TODO_INPUT_DATA" }),
  },
};
</script>

<style lang="scss" scoped>
.todo-list__btn {
  background: #8dff92;
  font-size: 20px;
  text-align: center;
  padding: 10px 20px;
  border: none;
  border-radius: 15px;
  cursor: pointer;
  width: 80%;

  &:hover {
    opacity: 0.7;
  }
}

.todo-list__inp {
  background: #fff;
  border: 1px solid #49bcff;
  border-radius: 15px;
  width: 80%;
  padding: 10px 20px;
  font-size: 20px;
  margin: 20px 0;
}
</style>
