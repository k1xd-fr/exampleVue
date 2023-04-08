<template>
    <div @click="$emit('close')" class="backdrop"></div>
</template>
  <style scoped>
  .backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9998;
  background-color: rgba(0, 0, 0, 0.5);
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
  </style>
