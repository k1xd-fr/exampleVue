<template>
  <div @click="click" class="hamburger">
    <span></span>
    <span></span>
    <span></span>
  </div>
</template>
<script setup>
// eslint-disable-next-line no-unused-vars
const props = defineProps({
  click: {
    type: Function
  }
})
</script>
<style>
.hamburger span {
  display: block;
  width: 24px;
  height: 3px;
  margin-bottom: 6px;
  background-color: rgb(17, 17, 17);
}

.hamburger:hover span {
  background-color: rgb(227, 114, 27);
}
</style>