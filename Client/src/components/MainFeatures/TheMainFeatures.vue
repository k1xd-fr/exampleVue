<template>
  <section class="features">
    <div class="container">
      <div class="title">
        <h2>Building Beautiful, Functional <span>eCommerce Websites</span></h2>
        <p>
          Natoque penatibus et magnis dis. Blandit aliquam etiam erat velit scelerisque. Imperdiet
          dui accumsan sit amet nulla facilisi morbi tempus iaculis.&nbsp;
        </p>
      </div>
      <div class="cards">
        <main-features-cards
          src="../../../../../img/upShop.jpeg"
          alt="upShop"
          title="No-limit Hosting"
        >
          <template #first>Any domain name</template>
          <template #second>Unlimited bandwidth</template>
          <template #third>Diam vel quam</template>
          <template #four>Suspendisse in</template>
        </main-features-cards>
        <main-features-cards src="../../../../../img/basket.jpeg" alt="basket" title="Online Store">
          <template #first>Loads of functionality</template>
          <template #second>Account creation</template>
          <template #third>Customer grouping</template>
          <template #four>Customize a theme</template>
        </main-features-cards>
        <main-features-cards
          src="../../../../../img/discounts.jpeg"
          alt="discounts"
          title="Sell Online"
        >
          <template #first>Manage inventory</template>
          <template #second>Customer accounts</template>
          <template #third>Quisque id diam vel</template>
          <template #four>Fringilla urna porttitor</template>
        </main-features-cards>
      </div>
      <p class="freepik">
        Image from <span><a class="link-freepik" href="https://www.freepik.com/">Freepik</a></span>
      </p>
    </div>
  </section>
</template>

<script setup>
import MainFeaturesCards from './MainFeaturesCards.vue'
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