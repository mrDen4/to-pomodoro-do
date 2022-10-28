<template>
  <div class="todo-list__wrap">
    <h2 v-show="!done" class="todo-list__title">Todo list</h2>
    <h2 v-show="done" class="todo-list__title">Done todo list</h2>
    <ul class="list todo-list__list">
      <TodoItem :todos="todos" :done="done" />
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import TodoItem from "./TodoItem.vue";
export default {
  props: ["done"],
  components: { TodoItem },
  computed: {
    ...mapGetters({ todos: "TODOS" }),
  },
};
</script>

<style lang="scss" scoped>
.todo-list__wrap {
  display: flex;
  flex-direction: column;
  width: 49%;
}
.todo-list__list {
  list-style: none;
  padding: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.todo-list__title {
  font-size: 40px;
  margin-bottom: 40px;
  width: 100%;
  text-align: center;
}
</style>
