<script setup>
import TodoWrap from "./components/todo/TodoWrap.vue";
import PomodoroTimer from "./components/PomodoroTimer.vue";
</script>

<template>
  <header class="header">
    <h1>Pomodoro list by Davydov.dev</h1>
  </header>

  <main class="main">
    <TodoWrap />
    <div class="pomodoro">
      <PomodoroTimer />
    </div>
  </main>
</template>

<style scoped>
.header {
  width: 100%;
  padding: 10px 20px;
  background: #ececec;
}

.main {
  display: flex;
  justify-content: space-around;
  padding-top: 20px;
}

.pomodoro {
  width: 35%;
}
</style>
