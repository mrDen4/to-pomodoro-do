import { createStore } from "vuex";

export default createStore({
  state: {
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
    todoInputData: "",
  },
  getters: {
    TODOS(state) {
      return state.todos;
    },
    TODO_INPUT_DATA(state) {
      return state.todoInputData;
    },
  },
  mutations: {
    ADD_TODO(state, todo) {
      state.todos.push({
        id: state.todos.length + 1,
        title: todo,
        date: new Date().toLocaleString(),
        done: false,
      });
      state.todoInputData = "";
    },
    updateTodoInput(state, message) {
      state.todoInputData = message;
    },
  },
});
