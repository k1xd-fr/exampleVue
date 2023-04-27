<template>
  <section class="GetYoursToday">
    <h2>Get yours today</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua. Blandit aliquam etiam erat velit.
    </p>
    <div class="profession">
      <ul>
        <li><check-mark class="icon" />Development</li>
        <li><check-mark class="icon" />App features</li>
        <li><check-mark class="icon" />Prototyping</li>
      </ul>
      <ul>
        <li><check-mark class="icon" />Finance cases</li>
        <li><check-mark class="icon" />App features</li>
        <li><check-mark class="icon" />IT services</li>
      </ul>
      <ul>
        <li><check-mark class="icon" />24/7 support</li>
        <li><check-mark class="icon" />Design thinking</li>
        <li><check-mark class="icon" />New product</li>
      </ul>
    </div>
    <v-button class="btn" :click="toggleModal">Learn more</v-button>
    <transition name="fade">
      <VBackdrop v-if="showModal" @close="showModal = false"></VBackdrop>
    </transition>
    <transition name="slide-down">
      <VModal
        v-if="showModal"
        @close="showModal = false"
        :title="'My Modal Title'"
        :content="'Some modal content.'"
      >
      </VModal>
    </transition>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const showModal = ref(false)

const toggleModal = () => {
  showModal.value = !showModal.value
}
</script>

<style scoped>
.GetYoursToday {
  background-color: #e73d71;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  padding: 90px;
}
.GetYoursToday h2 {
  font-size: 3.4375rem;
  line-height: 1.1;
  font-weight: 400;
  color: white;
}
.GetYoursToday p {
  font-size: 1.25rem;
  line-height: 1.8;
  text-align: center;
  color: white;
  max-width: 799px;
}
.profession {
  display: flex;
  justify-content: center;
  gap: 150px;
  margin-right: 100px;
  flex-wrap: wrap;
}
@media (max-width: 1099px) {
  .profession {
    margin-right: 0px;
    gap: 100px;
  }
}
@media (max-width: 576px) {
    .GetYoursToday{
        padding: 30px  0;
    }
  .GetYoursToday h2 {
    font-size: 1.875rem;
  }
  .GetYoursToday p{
    font-size: 1rem;
  }
  .profession {
    gap: 50px;
  }
}
.btn {
  padding: 20px 41px 20px 40px;
  max-width: max-content;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 1.125rem;
  color: white;
  letter-spacing: 3px;
  text-align: center;
  border: white solid 2px;
  background-color: transparent;
  font-family: 'Lato', sans-serif !important;
  border-radius: 10px !important;
  cursor: pointer;
}
.btn:hover {
  background-color: white;
  color: #e73d71;
}
ul {
  list-style: none;
  display: flex;
  flex-direction: column;
}
ul li {
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 2;
  font-family: 'Open Sans', sans-serif;
  color: white;
  display: flex;
  gap: 13px;
}
.icon {
  width: 16px;
  color: #f5adc3 !important;
}
</style>