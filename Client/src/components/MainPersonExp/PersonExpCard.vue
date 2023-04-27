<template>
  <div class="card">
    <img :src="src" :alt="alt" />
    <h6>{{ name }}</h6>
    <p>{{description}}</p>
  </div>
</template>

<script setup>
// eslint-disable-next-line no-unused-vars
const props = defineProps({
  name: {
    type: String,
    default: 'None'
  },
  description: {
    type: String,
    default: 'Description'
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
  max-width: 350px;
  border-radius: 0px 0px 20px 20px ;
  padding: 0 30px 30px;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
}
.card img {
  width: 171px;
  height: 171px;
  background-size: cover;
  border-radius: 50%;
  border: 20px solid white;
  object-fit: cover;
  margin-top: -70px;
}
.card h6{
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: 700;
    font-size: 1rem;
    color: white;
}
.card p{
    margin-top: 20px;
    font-size: 1rem;
    line-height: 1.6;
    color: white;
}


</style>