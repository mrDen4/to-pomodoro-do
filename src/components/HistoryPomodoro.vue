<script></script>

<template>
  <div class="history">
    <h2 class="history__title">History</h2>
    <ul class="history__list">
      <li class="list__item">Today</li>
      <li class="list__item">Week</li>
      <li class="list__item">Month</li>
    </ul>
    <h3 class="history__subtitle">Complete: 3 pomodoros</h3>
    <img src="@/assets/graph.png" alt="" class="history__graph" />
  </div>
</template>

<style lang="scss" scoped>
.history {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #ececec;
  border-radius: 15px;
  padding: 20px 45px;
}

.history__title {
  font-size: 30px;
  margin-bottom: 20px;
}

.history__subtitle {
  font-size: 20px;
  margin-bottom: 20px;
}

.history__list {
  list-style: none;
  padding: 0;
  display: flex;
  margin-bottom: 20px;
}

.list__item {
  margin-right: 10px;

  &::after {
    content: "/";
    margin-left: 10px;
  }

  &:last-child::after {
    content: none;
    margin: 0;
  }
}
</style>
