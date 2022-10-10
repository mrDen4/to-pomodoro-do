<script setup>
import TodoList from "./components/TodoList.vue";
import PomodoroTimer from "./components/PomodoroTimer.vue";
import HistoryPomodoro from "./components/HistoryPomodoro.vue";
</script>

<template>
  <header>
    <h1>Pomodoro list by Davydov.dev</h1>
  </header>

  <main>
    <TodoList />
    <PomodoroTimer />
    <HistoryPomodoro />
  </main>
</template>

<style scoped></style>
