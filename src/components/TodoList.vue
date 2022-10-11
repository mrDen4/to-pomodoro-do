<template>
  <div class="todo-list">
    <h2 class="todo-list__title">Todo list</h2>
    <ul class="todo-list__list">
      <li class="list__item">
        <input type="checkbox" class="list__checkbox" id="123" />
        <label for="123"></label>
        <p class="list__text">Draw a prototype</p>
      </li>
      <li class="list__item">
        <input type="checkbox" class="list__checkbox" id="124" />
        <label for="124"></label>
        <p class="list__text">Draw a prototype</p>
      </li>
      <li class="list__item">
        <input type="checkbox" class="list__checkbox" id="125" />
        <label for="125"></label>
        <p class="list__text">Draw a prototype</p>
      </li>
      <li class="list__item">
        <input type="checkbox" class="list__checkbox" id="126" />
        <label for="126"></label>
        <p class="list__text">Draw a prototype</p>
      </li>
      <li class="list__item">
        <input type="checkbox" class="list__checkbox" id="127" />
        <label for="127"></label>
        <p class="list__text">Draw a prototype</p>
      </li>
      <li class="list__item">
        <input type="checkbox" class="list__checkbox" id="128" />
        <label for="128"></label>
        <p class="list__text">Draw a prototype</p>
      </li>
    </ul>
    <button class="todo-list__btn">Add new todo</button>
  </div>
</template>

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
</style>
