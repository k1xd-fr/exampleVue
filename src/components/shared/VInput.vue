<template>
    <input :value="modelValue" @input="onInput" :type="type" :placeholder="placeholder" required>
</template>
<script setup>
const emit = defineEmits(['update:modelValue'])
// eslint-disable-next-line no-unused-vars
const props = defineProps({
    placeholder: {
        type: String,
        default: ''
    },
    type: {
        type: String,
        default: 'text'
    },
    modelValue: {
        type: String,
        default: ''
    },

})
const onInput = (e) => {
    emit('update:modelValue', e.target.value)
}
</script>
<style></style>