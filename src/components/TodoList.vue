<template>
  <div class="todo-list">
    <h2 class="todo-list__title">Todo list</h2>
    <ul class="todo-list__list">
      <li
        class="list__item"
        v-for="todo in todos"
        :key="todo.id"
        v-show="!todo.done"
      >
        <input
          type="checkbox"
          class="list__checkbox"
          :id="todo.id"
          v-model="todo.done"
          @click="exportTodo"
        />
        <label :for="todo.id"></label>
        <p class="list__text">{{ todo.title }}</p>
        <p class="list__text list__text--date">{{ todo.date }}</p>
      </li>
    </ul>
    <input type="text" class="todo-list__inp" v-model="inputData" />
    <button class="todo-list__btn" @click="addTodo">Add new todo</button>
    <h3 class="todo-list__title">Done todo list</h3>
    <ul class="todo-list__list">
      <li
        :class="todo.done ? 'list__item list__item--done' : 'list__item'"
        v-for="todo in todos"
        :key="todo.id"
        v-show="todo.done"
      >
        <input
          type="checkbox"
          class="list__checkbox"
          :id="todo.id"
          v-model="todo.done"
        />
        <label :for="todo.id"></label>
        <p class="list__text">{{ todo.title }}</p>
        <p class="list__text list__text--date">{{ todo.date }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      todos: [
        {
          id: 1,
          title: "Draw a prototype",
          date: new Date(2022, 10, 20).toLocaleString(),
          done: false,
        },
        {
          id: 2,
          title: "Draw a prototype",
          date: new Date().toLocaleString(),
          done: true,
        },
      ],
      inputData: "",
    };
  },
  methods: {
    addTodo() {
      this.todos.push({
        id: this.todos.length + 1,
        title: this.inputData,
        date: new Date().toLocaleString(),
        done: false,
      });
      this.inputData = "";
    },
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

.todo-list__title {
  font-size: 40px;
  margin-bottom: 40px;
}

.todo-list__list {
  list-style: none;
  padding: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.list__item {
  width: 80%;
  background: #fff;
  display: flex;
  align-items: center;
  padding: 10px 20px;
  border-radius: 15px;
  margin-bottom: 20px;

  &--done {
    opacity: 0.5;
  }
}

.list__checkbox {
  position: absolute;
  z-index: -1;
  opacity: 0;

  & + label {
    display: inline-flex;
    align-items: center;
    user-select: none;
  }

  & + label::before {
    content: "";
    display: inline-block;
    width: 1em;
    height: 1em;
    flex-shrink: 0;
    flex-grow: 0;
    border: 1px solid #adb5bd;
    border-radius: 0.25em;
    margin-right: 0.5em;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 50% 50%;
  }

  &:checked + label::before {
    border-color: #0b76ef;
    background-color: #0b76ef;
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3e%3c/svg%3e");
  }
  /* стили при наведении курсора на checkbox */
  &:not(:disabled):not(:checked) + label:hover::before {
    border-color: #b3d7ff;
  }
  /* стили для активного состояния чекбокса (при нажатии на него) */
  &:not(:disabled):active + label::before {
    background-color: #b3d7ff;
    border-color: #b3d7ff;
  }
  /* стили для чекбокса, находящегося в фокусе */
  &:focus + label::before {
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
  }
  /* стили для чекбокса, находящегося в фокусе и не находящегося в состоянии checked */
  &:focus:not(:checked) + label::before {
    border-color: #80bdff;
  }
  /* стили для чекбокса, находящегося в состоянии disabled */
  &:disabled + label::before {
    background-color: #e9ecef;
  }
}

.list__text {
  font-size: 20px;

  &--date {
    margin-left: auto;
    font-size: 15px;
  }
}

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
