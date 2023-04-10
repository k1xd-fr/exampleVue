
<template>
    <button @click="click" class="btn">
        <slot></slot>
    </button>
</template>
<script setup>
defineProps({
    click:{
        type:Boolean,
        default: false
    }
})
</script>
<style scoped></style>