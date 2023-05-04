<template>
  <section v-if="data" class="Procces">
    <p>{{ data.title }}</p>
    <div class="circles">
      <div class="circle p150  purple">
        <h3 class="count1"></h3><span class="purple">%</span>
      </div>

      <div class="circle p100 blue1">
        <h3 class="count2"></h3><span class="blue1">%</span>
      </div>
      <div class="circle p70 blue-white">
        <h3 class="count3"></h3><span class="blue-white">%</span>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import { fetchData } from '../api/request';
const data = ref()
fetchData().then((resp) => {
  data.value = resp.data.Procces
})
</script>

<style scoped>
.Procces {
  max-width: 1240px;
  margin: 0 auto;
  padding: 50px;

}

p {
  padding: 30px;
  font-size: 1.25rem;
  text-align: left;
  max-width: 690px;
  line-height: 1.6;
}

.circles {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 60px;
}

.circle {
  border: 20px solid;
  margin: 0;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: sans-serif;
}

.p150 {
  padding: 150px;
}

.p100 {
  padding: 100px;
}

.p70 {
  padding: 70px;
}

span {
  font-weight: 700;
}

.count1 {
  color: #e73d71;
  animation: counter1 10s infinite;
  counter-reset: num var(--num);
  font-size: 6rem;
  font-weight: 700;
}


.count2 {
  color: #5985c3;
  animation: counter2 10s infinite;
  counter-reset: num var(--num);
  font-size: 4.5rem;
  font-weight: 700;
}

.count3 {
  color: #4fbdc0;
  animation: counter3 10s infinite;
  counter-reset: num var(--num);
  font-size: 3.75rem;
  font-weight: 700;
}

@property --num {
  syntax: "<integer>";
  initial-value: 0;
  inherits: false;
}

.count1::after {
  content: counter(num);
}

.count2::after {
  content: counter(num);
}

.count3::after {
  content: counter(num);
}

@keyframes counter1 {
  from {
    --num: 0;
  }

  to {
    --num: 80;
  }
}

@keyframes counter2 {
  from {
    --num: 0;
  }

  to {
    --num: 13;
  }
}

@keyframes counter3 {
  from {
    --num: 0;
  }

  to {
    --num: 7;
  }
}

.purple {
  color: #e73d71;
  font-size: 6rem;
}

.blue1 {
  color: #5985c3;
  font-size: 4.5rem;
}

.blue-white {
  color: #4fbdc0;
  font-size: 3.75rem;
}

@media (max-width: 991px) {
  .circles {
    gap: 20px;
  }
  .p150{
    padding: 100px;
  }
  .p100{
    padding: 80px;
  }
  .p70{
    padding: 70px;
  }
  .count1 {
    font-size: 4.5rem;
  }

  .count2 {
    font-size: 3rem;
  }

  .count3 {
    font-size: 2.25rem;
  }

  .purple {
    font-size: 4.5rem;
  }

  .blue1 {
    font-size: 3rem;
  }
  .blue-white{
    font-size: 2.25rem;
  }
}
@media (max-width: 767px){
  .Procces{
    padding: 80px 10px;
  }
  p{
    padding: 0;
  }
  .circles{
    flex-direction: column;
  }
}
</style>