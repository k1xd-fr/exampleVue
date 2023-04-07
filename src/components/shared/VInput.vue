<template>
    <input :value="modelValue" @submit="$emit('update:modelValue', $event.target.value)" :type="name"
        :placeholder="placeholder" required>
</template>
<script setup>
import { defineProps, defineEmits } from 'vue';
// eslint-disable-next-line no-unused-vars
const props = defineProps({
    placeholder: String,
    name: String,

}, ["modelValue"])
defineEmits(['update:modelValue'])
</script>
<style></style>