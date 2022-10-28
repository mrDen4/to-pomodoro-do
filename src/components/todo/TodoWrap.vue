<template>
  <div class="todo-list">
    <TodoList :done="false" />
    <TodoList :done="true" />
    <TodoAdd />
  </div>
</template>

<script>
import TodoList from "./TodoList.vue";
import TodoAdd from "./TodoAdd.vue";

export default {
  components: { TodoList, TodoAdd },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.todo-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 60%;
  background: #ececec;
  padding: 20px 0;
  border-radius: 15px;
}
</style>
