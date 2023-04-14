<template>
  <section class="purchase">
    <div>
      <h2>Choose your pay<span> monthly website plan</span></h2>
      <p>Sample text. Click to select the text box. Click again or double click to start editing the text.</p>
      <div class="cards">
        <MainPurchaseCard />
      </div>
    </div>
  </section>
</template>

<script setup>
import MainPurchaseCard from './MainPurchaseCard.vue';


</script>

<style scoped>
.purchase{
  background: rgb(51, 51, 51);
}
.purchase div {
  max-width: 1140px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding: 20px;
  justify-content: center;
  align-items: center;
  gap: 30px;
}

.purchase h2 {
  max-width: 700px;
  text-align: center;
  font-size: 3.4375rem;
  line-height: 1.1;
  font-weight: 400;
  color:  white;
}
.purchase p{
  text-align: center;
  font-style: italic;
  max-width: 541px;
  color: white;
}
.purchase h2 span{
  font-weight: 700;
}
</style>