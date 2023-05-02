<template>
  <section v-if="data, dataCard" class="features">
    <div class="container">
      <div class="title">
        <h2>{{ data.title }} <span>{{ data.span }}</span></h2>
        <p>
          {{ data.description }}
        </p>
      </div>
      <div class="cards">
        <main-features-cards :src="dataCard[0].img[0].url" alt="upShop" :title="dataCard[0].title">
          <template #first>{{ dataList[0].list1 }}</template>
          <template #second>{{ dataList[0].list2 }}</template>
          <template #third>{{ dataList[0].list3 }}</template>
          <template #four>{{ dataList[0].list4 }}</template>
        </main-features-cards>
        <main-features-cards :src="dataCard[1].img[0].url" alt="basket" :title="dataCard[1].title">
          <template #first>{{ dataList[1].list1 }}</template>
          <template #second>{{ dataList[1].list2 }}</template>
          <template #third>{{ dataList[1].list3 }}</template>
          <template #four>{{ dataList[1].list4 }}</template>
        </main-features-cards>
        <main-features-cards :src="dataCard[2].img[0].url" alt="discounts" :title="dataCard[2].title">
          <template #first>{{ dataList[2].list1 }}</template>
          <template #second>{{ dataList[2].list2 }}</template>
          <template #third>{{ dataList[2].list3 }}</template>
          <template #four>{{ dataList[2].list4 }}</template>
        </main-features-cards>
      </div>
      <p class="freepik">
        Image from <span><a class="link-freepik" href="https://www.freepik.com/">Freepik</a></span>
      </p>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import { fetchData } from '../../api/request';
import MainFeaturesCards from './MainFeaturesCards.vue'

const data = ref()
let dataCard = null
let dataList = null
fetchData().then((resp) => {
  data.value = resp.data.features
  dataCard = resp.data.features.featuresCards
  dataList = resp.data.features.List
})
</script>

<style scoped>
.features {
  background: #333333;
}

.container {
  max-width: 100%;
}

.title {
  max-width: max-content;
  margin: 0 auto;
  text-align: center;
  padding: 50px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.title h2 {
  margin: 0 auto;
  max-width: 855px;
  font-size: 3.4375rem;
  line-height: 1.1;
  font-weight: 400;
  color: white;
}

h2 span {
  font-weight: 700;
}

.title p {
  max-width: 674px;
  line-height: 1.8;
  font-size: 1.125rem;
  margin: 0 auto;
  color: white;
}

.cards {
  display: flex;
  gap: 30px;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 10px;
}

@media (max-width: 576px) {
  .title h2 {
    font-size: 1.875rem;
    line-height: 1.1;
  }
}

.link-freepik {
  text-decoration: underline white;
  color: white;
  font-family: inherit;
  line-height: inherit;
  letter-spacing: inherit;
  text-transform: inherit;
}

.link-freepik:hover {
  text-decoration: underline #e73d71;
}

.freepik {
  font-size: 1.125rem;
  color: white;
  text-align: center;
  padding: 30px 0px 60px;
}
</style>