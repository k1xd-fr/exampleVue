
<template>
    <button @click="click" class="btn">
        <slot></slot>
    </button>
</template>
<script setup>
defineProps({
    click:{
        type: Function
    }
})
</script>
<style scoped></style>