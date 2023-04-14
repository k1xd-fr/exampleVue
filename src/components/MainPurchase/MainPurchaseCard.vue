<template>
    <div>
        <div>

        </div>
        <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
        <v-button class="btn" :click="toggleModal">Learn more</v-button>
        <transition name="fade">
            <VBackdrop v-if="showModal" @close="showModal = false"></VBackdrop>
        </transition>
        <transition name="slide-down">
            <VModal v-if="showModal" @close="showModal = false" :title="'My Modal Title'" :content="'Some modal content.'">
            </VModal>
        </transition>
    </div>
</template>

<script setup>
import { ref } from 'vue';


const showModal = ref(false)

const toggleModal = () => {
    showModal.value = !showModal.value
}
</script>

<style scoped></style>