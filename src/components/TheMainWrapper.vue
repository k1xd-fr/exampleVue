<script setup>

import { ref } from 'vue';
import VModal from './UI/VModal.vue';
import VBackdrop from './UI/VBackdrop.vue';


const showModal = ref(false)

const toggleModal = () => {
    showModal.value = !showModal.value
}
</script>


<template>
    <section class="container">
        <div class="info">
            <h1>
                We create <span class="black-text">online shops</span>
            </h1>
            <p class="p">
                Accumsan in nisl nisi scelerisque. Sapien nec sagittis aliquam malesuada bibendum arcu vitae. Maecenas
                ultricies mi eget mauris pharetra et ultrices neque.
            </p>
            <p>
                Image from <span><a class="link-freepik" href="https://www.freepik.com/">Freepik</a></span>
            </p>
            <div>
                <v-button class="btn" :click="toggleModal">Read more</v-button>
                <transition name="fade">
                    <VBackdrop v-if="showModal" @close="showModal = false"></VBackdrop>
                </transition>
                <transition name="slide-down">
                    <VModal v-if="showModal" @close="showModal = false" :title="'My Modal Title'"
                        :content="'Some modal content.'">
                    </VModal>
                </transition>
            </div>
        </div>
        <img src="../../img/ShoppingConcepts.jpeg" alt="ShoppingConcepts">
    </section>
</template>

<style scoped>
.container {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    background-color: rgb(220, 220, 220);
    max-width: 100%;
    align-items: center;
    justify-content: center;
}

.info {
    padding: 50px 30px;
    max-width: 414px;
    display: flex;
    flex-direction: column;
    gap: 30px;
}

.btn {
    color: #ffffff !important;
    background-color: #e73d71 !important;
    border-radius: 10px !important;
    text-transform: uppercase;
    letter-spacing: 3px;
    font-size: 1.125rem;
    border-style: none;
    text-align: center;
    font-weight: 700;
    padding: 16px 52px 17px 51px;
    font-family: "Lato", sans-serif !important;
    cursor: pointer;
}

.btn:hover {
    background-color: #111111 !important;
}

h1 {
    font-size: 3rem;
    font-weight: 400;
    max-width: 353.25px;
    line-height: 1.1;
    font-style: normal;
    margin-top: 68px;
}

.p {
    max-width: 353.25px;
    line-height: 1.8;
    font-size: 1.125rem;
    font-weight: 400;
    font-style: normal;
}

.black-text {
    color: #111111;
    font-weight: 700;
}

.link-freepik {
    text-decoration: underline black;
    color: #111111;
    font-size: inherit;
    font-family: inherit;
    line-height: inherit;
    letter-spacing: inherit;
    text-transform: inherit;
}

.link-freepik:hover {
    text-decoration: underline #e73d71;
}

img {
    width: 700px;
    contain: content;
}

@media (max-width: 1199px) {
    .container {
        padding: 20px;
    }

    img {
        max-width: 100%;
    }

    h1 {
        font-size: 2.2rem;
    }
}

@media (max-width: 991px) {
    .container {
        min-height: 239px;
        flex-wrap: wrap;
        max-width: max-content;
    }

    .info {
        margin: 0 auto;
    }

    

    h1 {
        font-size: 2.25rem;
        margin-top: 0;
        max-width: max-content;
    }
}



@media (max-width: 767px) {


   
}

@media (max-width: 575px) {
    .container {
        justify-content: center;

    }

    .info {
        margin: 0;
        padding: 30px;
    }

}
</style>


