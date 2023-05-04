<template>
  <section class="purchase">
    <div class="purch">
      <div class="title">
        <h2>Choose your pay<span> monthly website plan</span></h2>
        <p>Sample text. Click to select the text box. Click again or double click to start editing the text.</p>
      </div>
      <div class="cards">
        <MainPurchaseCard backgroundColor="#5985c3" color="#5985c3" num="29" title="Five Page Starter"> 
          <template #li>
            <li>1 full user</li>
            <li>1,000 Email Previews</li>
            <li>5 contacts per client</li>
            <li>5 coffee cups</li>
          </template>
        </MainPurchaseCard>
        <MainPurchaseCard backgroundColor="#4fbdc0" color="#4fbdc0" num="59" title="10 Page Business">
          <template #li>
            <li>10 full user</li>
            <li>2,000 Email Previews</li>
            <li>5 contacts per client</li>
            <li>10 coffee cups</li>
          </template>
        </MainPurchaseCard>
        <MainPurchaseCard backgroundColor="#e73d71" color="#e73d71" num="119" title="eCommerce Starter">
          <template #li>
            <li>100 full user</li>
            <li>3,000 Email Previews</li>
            <li>5 contacts per client</li>
            <li>15 coffee cups</li>
          </template>
        </MainPurchaseCard>
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
  padding: 40px;
}
.purch{
  max-width: 1140px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding: 20px;
  justify-content: center;
  align-items: center;
  gap: 80px;
}
.title{
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
}
.cards{
  display: flex ;
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
li{
  font-size: 1rem;
  line-height: 3;
  color: white;
  font-family: "Opens sans", sans-serif;
}
@media(max-width: 1199px){
  .cards{
    gap: 15px;
  }
}
@media(max-width: 575px){
  .purchase h2{
    font-size: 1.875rem;
  }
}
</style>