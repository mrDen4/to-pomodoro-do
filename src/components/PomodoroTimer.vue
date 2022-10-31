<template>
  <div class="pomodoro-timer">
    <h2 class="pomodoro-timer__title">Pomodoro Timer</h2>
    <div class="pomodoro-timer__container">
      <div class="container__numbers">
        <div class="numbers__block">{{ Math.trunc((total / 60) % 60) }}</div>
      </div>
      <button
        class="container__btn"
        @click="startTimer"
        v-show="!this.timerPlay"
      ></button>
      <button
        class="container__btn container__btn--pause"
        @click="pauseTimer"
        v-show="this.timerPlay"
      ></button>
      <button
        class="container__btn container__btn--stop"
        @click="stopTimer"
        v-show="this.timerPlay || this.total < 1500"
      ></button>
      <div class="container__numbers">
        <div class="numbers__block">{{ Math.trunc(this.total % 60) }}</div>
      </div>
    </div>
    <div class="pomodoro-timer__counts">
      <div
        :class="
          pomodoros.nowPomodoro >= 1
            ? 'counts__item counts__item--done'
            : 'counts__item'
        "
      ></div>
      <div
        :class="
          pomodoros.nowPomodoro >= 2
            ? 'counts__item counts__item--done'
            : 'counts__item'
        "
      ></div>
      <div
        :class="
          pomodoros.nowPomodoro >= 3
            ? 'counts__item counts__item--done'
            : 'counts__item'
        "
      ></div>
      <div
        :class="
          pomodoros.nowPomodoro >= 4
            ? 'counts__item counts__item--done'
            : 'counts__item'
        "
      ></div>
    </div>
    <p class="pomodoro-timer__statistic">
      Выполнено за сегодня: {{ pomodoros.totalPomodoro }}
    </p>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  data() {
    return {
      pomodoroTime: {
        workTime: 1500,
        breakTime: 1,
      },
      total: 1500,
      timerPlay: false,
      interval: {},
    };
  },
  methods: {
    ...mapMutations({
      addPomodoro: "ADD_POMODORO",
      clearPomodoro: "CLEAR_POMODORO",
    }),
    startTimer() {
      this.timerPlay = true;
      this.interval = setInterval(() => {
        if (this.total <= 1 && this.pomodoros.nowPomodoro == 3) {
          this.addPomodoro();
          this.clearPomodoro();
          this.stopTimer();
        } else if (this.total <= 1) {
          this.stopTimer();
          this.addPomodoro();
        } else {
          this.total--;
        }
      }, 1000);
    },
    pauseTimer() {
      this.timerPlay = false;
      clearInterval(this.interval);
    },
    stopTimer() {
      this.total = this.pomodoroTime.workTime;
      clearInterval(this.interval);
      this.timerPlay = false;
    },
  },
  computed: {
    ...mapGetters({ pomodoros: "POMODOROS" }),
  },
};
</script>

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
  width: 80px;
  height: 90px;
  text-align: center;

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

  &--pause {
    background: url("@/assets/pause.svg") center center no-repeat;
  }

  &--stop {
    background: url("@/assets/stop.svg") center center no-repeat;
  }
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
