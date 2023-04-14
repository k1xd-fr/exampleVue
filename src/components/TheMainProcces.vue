<template>
  <div>
    {{ counter  }}
  </div>
  <div>
    {{ counter }}
  </div>
  <div>
    {{ counter }}
  </div>
</template>

<script setup>
import { ref, } from 'vue';
const counter = ref(0);
const speed = ref(100);

window.addEventListener("scroll", function () {
  let wScroll = this.scrollY;
  if (wScroll >= 4600) {
    const interval = setInterval(() => {
      if (counter.value === 80) {
        clearInterval(interval);
      } else {
        ++counter.value;
      }
    }, speed.value);

    const speedinterval = setInterval(() => {
      speed.value += 100
      if (speed.value <= 100) {
        clearInterval(speedinterval)
      }
    }, 1000)
  } else {
    counter.value = 0
    speed.value = 100
  }


});
</script>

<style scoped>
div {
  height: 50px;
  width: 50px;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ccc;
}
</style>