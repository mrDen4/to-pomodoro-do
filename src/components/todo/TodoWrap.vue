<template>
  <div class="todo-list">
    <TodoList :done="false" />
    <TodoAdd />
    <TodoList :done="true" />
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
  flex-direction: column;
  width: 60%;
  background: #ececec;
  padding: 20px 0;
  align-items: center;
  border-radius: 15px;
}
</style>
