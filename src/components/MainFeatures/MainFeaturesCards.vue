<template>
  <div class="card">
    <div>
      <img :src="src" :alt="alt" />
      <h4 class="title">{{ title }}</h4>
    </div>
    <ul class="list">
      <li><slot name="first"> </slot></li>
      <li><slot name="second"> </slot></li>
      <li><slot name="third"> </slot></li>
      <li><slot name="four"> </slot></li>
    </ul>
  </div>
</template>

<script setup>
// eslint-disable-next-line no-unused-vars
const props = defineProps({
  title: {
    type: String,
    default: 'Underfined'
  },
  src: {
    type: String,
    default: 'Underfined'
  },
  alt: {
    type: String,
    default: 'Underfined'
  }
})
</script>

<style scoped>
.card {
  width: 369px;
  background: white;
  border-radius: 22px;
  padding: 60px;
}
.card div {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.card img {
  max-width: 265px;
  border-radius: 50%;
  border: 10px solid white;
  position: relative;
  margin-top: -85px;
}
.title {
  font-weight: 700;
  font-size: 1.5rem;
  padding: 15px;
  line-height: 1.2;
}
ul {
  list-style: '— ';
  padding: 20px;
}
ul li {
  font-size: 1.25rem;
  line-height: 2;
  color: #111111;
  font-family: 'Open Sans', sans-serif;
  font-weight: 400;
}
@media (max-width: 767px) {
  .card {
    padding: 30px;
    width: 540px;
  }
  .card img{
    max-width: 323px;
    margin-top: 0;
  }
  .title{
    font-size: 1.875rem;
  }
  
  ul li {
    font-size: 1.5rem;
    line-height: 2;
  }
}
@media (max-width: 576px) {
  .card {
    width: 340px;
  }
  .title{
    font-size: 1.4rem;
  }
  .card img {
    max-width: 290px;
  }
  ul{
    padding: 10px;
  }
}
</style>