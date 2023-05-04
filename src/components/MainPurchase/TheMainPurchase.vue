<template>
  <section v-if="data" class="purchase">
    <div class="purch">
      <div class="title">
        <h2>{{ data.title }}<span> {{ data.span }}</span></h2>
        <p>{{ data.description }}</p>
      </div>
      <div class="cards">
        <MainPurchaseCard backgroundColor="#5985c3" color="#5985c3" :num="dataCard[0].num" :title="dataCard[0].title">
          <template #li>
            <li>{{ dataList[0].list1 }}</li>
            <li>{{ dataList[0].list2 }}</li>
            <li>{{ dataList[0].list3 }}</li>
            <li>{{ dataList[0].list4 }}</li>
          </template>
        </MainPurchaseCard>
        <MainPurchaseCard backgroundColor="#4fbdc0" color="#4fbdc0" :num="dataCard[1].num" :title="dataCard[1].title">
          <template #li>
            <li>{{ dataList[1].list1 }}</li>
            <li>{{ dataList[1].list2 }}</li>
            <li>{{ dataList[1].list3 }}</li>
            <li>{{ dataList[1].list4 }}</li>
          </template>
        </MainPurchaseCard>
        <MainPurchaseCard backgroundColor="#e73d71" color="#e73d71" :num="dataCard[2].num" :title="dataCard[2].title">
          <template #li>
            <li>{{ dataList[2].list1 }}</li>
            <li>{{ dataList[2].list2 }}</li>
            <li>{{ dataList[2].list3 }}</li>
            <li>{{ dataList[2].list4 }}</li>
          </template>
        </MainPurchaseCard>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import { fetchData } from '../../api/request';
import MainPurchaseCard from './MainPurchaseCard.vue';


const data = ref()
let dataCard = null
let dataList = null
fetchData().then((resp) => {
  data.value = resp.data.Purchase
  dataCard = resp.data.Purchase.PurchaseCard
  dataList = resp.data.Purchase.List
  
})
</script>

<style scoped>
.purchase {
  background: rgb(51, 51, 51);
  padding: 40px;
}

.purch {
  max-width: 1140px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding: 20px;
  justify-content: center;
  align-items: center;
  gap: 80px;
}

.title {
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
}

.cards {
  display: flex;
  flex-direction: row;
  gap: 40px;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

.purchase h2 {
  max-width: 700px;
  text-align: center;
  font-size: 3.4375rem;
  line-height: 1.1;
  font-weight: 400;
  color: white;
}

.purchase p {
  text-align: center;
  font-style: italic;
  max-width: 541px;
  color: white;
}

.purchase h2 span {
  font-weight: 700;
}

li {
  font-size: 1rem;
  line-height: 3;
  color: white;
  font-family: "Opens sans", sans-serif;
}

@media(max-width: 1199px) {
  .cards {
    gap: 15px;
  }
}

@media(max-width: 575px) {
  .purchase h2 {
    font-size: 1.875rem;
  }
}</style>