<template>
  <form class="todo-list__add-todo" @submit.prevent="addTodo(inputData)">
    <input
      type="text"
      class="todo-list__inp"
      autofocus
      :value="inputData"
      @input="updateTodoInput"
    />
    <button class="todo-list__btn" type="submit">Add new todo</button>
  </form>
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
.todo-list__add-todo {
  margin-top: auto;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.todo-list__btn {
  background: #8dff92;
  font-size: 20px;
  text-align: center;
  padding: 10px 20px;
  border: none;
  border-radius: 15px;
  cursor: pointer;
  width: 25%;

  &:hover {
    opacity: 0.7;
  }
}

.todo-list__inp {
  background: #fff;
  border: 1px solid #49bcff;
  border-radius: 15px;
  width: 70%;
  padding: 10px 20px;
  font-size: 20px;
}
</style>
