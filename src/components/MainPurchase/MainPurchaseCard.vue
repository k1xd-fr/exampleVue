<template>
    <div :style="{ backgroundColor }" class="card">
        <div :style="{ color }" class="title">
            <h5 :style="{ color }">{{ title }}</h5>
            <h2 :style="{ color }">$ {{ num }}</h2>
        </div>
        <ul>
            <slot name="li"></slot>
        </ul>
        <v-button class="btn" :click="toggleModal">Buy Now</v-button>
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

// eslint-disable-next-line no-unused-vars
const props = defineProps({
    title: {
        type: String,
        default: 'Underfined'
    },
    num: {
        type: Number,
        default: null
    },
    color: {
        type: String,
        default: "white"
    },
    backgroundColor: {
        type: String,
        default: "white"
    }
})
const showModal = ref(false)

const toggleModal = () => {
    showModal.value = !showModal.value
}
</script>

<style scoped>
.card {
    border-radius: 30px !important;
    padding: 0 30px 30px;
    max-width: 100%;
    display: flex;
    flex-direction: column;
    gap: 50px;
    justify-content: center;
    align-items: center;
}

.title {
    margin-top: -50px;
    border-radius: 10px !important;
    padding: 20px;
    justify-content: center;
    display: flex;
    flex-direction: column;
    background-color: white;
    gap: 20px;
    width: 270px;
    border-top: 7px solid;
    text-align: center;
    box-shadow: 5px 5px 20px 0 rgba(0, 0, 0, 0.4);
}

.title h5 {
    font-weight: 500;
    font-size: 1.25rem;
    line-height: 1.2;
}

.title h2 {
    font-size: 3.75rem;
    font-weight: 700;
}

.btn {
    color: black;
    border-color: #ffffff !important;
    background-color: #ffffff;
    font-weight: 400;
    text-transform: uppercase;
    letter-spacing: 2px;
    border-style: solid;
    padding: 17px 56px;
    border-radius: 10px !important;
    margin-bottom: 30px;
}
.btn:hover{
    color:white;
    background-color: inherit;
}

ul {
    display: flex;
    flex-direction: column;
    list-style: none;
    text-align: center;
}

@media(max-width: 1199px) {
    .card {
        gap: 20px;
        padding: 0 20px 20px;
    }
}

@media (max-width: 991px) {
    .title {
        width: 160px;
    }

    .title h2 {
        font-size: 2.75rem;
    }
}

@media (max-width: 767px) {
    .card {
        min-height: fit-content;
        max-width: 100%;
        width: 90%;
        padding: 0 30px 30px;
    }
    .title{
        margin: 0;
        width: 100%;
    }
}</style>