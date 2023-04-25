<template>
    <textarea v-if="type === 'textarea'" @input="onInput" class="input" :value="modelValue" :placeholder="placeholder"></textarea>
    <input v-else :value="modelValue" @input="onInput" :type="type" :placeholder="placeholder" required>
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
        validator(value) {
            const types = ['email', 'search', 'password', 'textarea', 'number']
            if (types.includes(value)) {
                return value
            }
            return 'text'
        },
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