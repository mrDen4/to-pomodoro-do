<template>
  <div class="pomodoro-timer">
    <h2 class="pomodoro-timer__title">Pomodoro Timer</h2>
    <div class="pomodoro-timer__container">
      <div class="container__numbers">
        <div class="numbers__block">2</div>
        <div class="numbers__block">5</div>
      </div>
      <button class="container__btn"></button>
      <div class="container__numbers">
        <div class="numbers__block">0</div>
        <div class="numbers__block">0</div>
      </div>
    </div>
    <div class="pomodoro-timer__counts">
      <div class="counts__item counts__item--done"></div>
      <div class="counts__item"></div>
      <div class="counts__item"></div>
      <div class="counts__item"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.pomodoro-timer {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #ececec;
  border-radius: 15px;
  padding: 20px 45px;
  margin-bottom: 40px;
}

.pomodoro-timer__title {
  margin-bottom: 20px;
  font-size: 30px;
}

.pomodoro-timer__container {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.container__numbers {
  display: flex;
}

.numbers__block {
  background: #000;
  color: #fff;
  border-radius: 15px;
  font-size: 40px;
  padding: 20px 15px;
  margin-right: 10px;

  &:last-child {
    margin: 0;
  }
}

.container__btn {
  border-radius: 50%;
  border: 1px solid #000;
  background: url("@/assets/play.svg") center center no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 65px;
  height: 65px;
  margin: 0 10px;
}

.pomodoro-timer__counts {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 25%;
}

.counts__item {
  width: 15px;
  height: 15px;
  border: 1px solid #000;
  border-radius: 50%;

  &--done {
    background: #000;
  }
}
</style>
