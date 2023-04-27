<script setup>
import { ref } from 'vue';
import VOffCanvasMenu from '../components/UI/VOffCanvasMenu.vue';

const showModal = ref(false)
const toggleModal = () => {
  showModal.value = !showModal.value
}
</script>

<template>
  <header>
    <VLogo />
    <nav>
      <VHamburger :click="toggleModal" />
      <VOffCanvasMenu :click="toggleModal" :active="showModal" />
    </nav>
  </header>
</template>

<style scoped>
header {
  align-items: center;
  max-width: 1140px;
  display: flex;
  background-color: white;
  padding: 20px;
  margin: 0 auto;
  justify-content: space-between;
}
</style>
