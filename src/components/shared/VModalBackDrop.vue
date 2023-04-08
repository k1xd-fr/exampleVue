
<template>
    <div>
        <button @click="toggleModal">Open Modal</button>
        <transition name="fade">
            <VBackdrop v-if="showModal" @close="showModal = false"></VBackdrop>
        </transition>
        <transition name="slide-down">
            <VModal v-if="showModal" @close="showModal = false" :title="'My Modal Title'" :content="'Some modal content.'">
            </VModal>

        </transition>
    </div>
</template >
<script lang="ts" setup>
import { ref } from 'vue';
import VModal from '../UI/VModal.vue';

import VBackdrop from '../UI/VBackdrop.vue';

const showModal = ref(false)

const toggleModal = () => {
    showModal.value = !showModal.value
}
</script>
