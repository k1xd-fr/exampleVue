<script setup>
import MainHeader from '../Layout/MainHeader.vue';
import TheMainWrapper from '../components/TheMainWrapper.vue';
import TheMainInfo from '../components/MainInfo/TheMainInfo.vue';
import TheMainOurWay from '../components/MainOurWay/TheMainOurWay.vue';
import TheMainConsultation from '../components/TheMainConsultation.vue';
import TheMainFeatures from '../components/MainFeatures/TheMainFeatures.vue'
import TheMainGetYoursToday from "../components/TheMainGetYoursToday.vue"
import TheMainPersonExp from '../components/MainPersonExp/TheMainPersonExp.vue';
import TheMainPurchase from "../components/MainPurchase/TheMainPurchase.vue"
import TheMainProcces from "../components/TheMainProcces.vue"
import TheMainLogos from '../components/TheMainLogos.vue';
import TheMainForm from '../components/MainForm/TheMainForm.vue';
import MainFooter from "../Layout/MainFooter.vue"
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import state from '../store/store'
const showModal = ref(false)
window.addEventListener("keydown", (e) => {
    if (e.altKey && e.key === 'Enter') {
        e.preventDefault()
        showModal.value = !showModal.value
    }
})

const password = ref('')
const router = useRouter()

function login() {
    if (password.value === 'secret') {
        state.isAuthenticated = true
        router.push('/admin')
    } else {
        alert('Invalid password')
    }
}
</script>
<template>
    <main-header />
    <the-main-wrapper />
    <the-main-info />
    <the-main-our-way />
    <the-main-consultation />
    <the-main-features />
    <the-main-get-yours-today />
    <the-main-person-exp />
    <the-main-purchase />
    <the-main-procces />
    <the-main-logos />
    <the-main-form />
    <div class="adminPanel">
        <transition name="fade">
            <VBackdrop @close="showModal = !showModal" v-if="showModal"></VBackdrop>
        </transition>
        <transition name="slide-down">
            <VModal class="modal" @close="showModal = !showModal" v-if="showModal" :title="'Вход в Админ Панель'">
                <form @submit.prevent="login">
                    <label>
                        Password:
                        <input type="password" v-model="password">
                        <button class="btn" type="submit">Login</button>
                    </label>
                </form>
            </VModal>
        </transition>
    </div>
    <main-footer />
</template>
<style scoped>
.modal{
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 40px;
    text-align: center;
}
label{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
    gap: 1px;
    font-size: 24px;
    font-family: "Open-sans", sans-serif;
    font-weight: 700;
}
input {
    max-width: 100%;
    padding: 10px 15px;
    outline: none;
    border: solid 1px #e5e5e5;
    stroke: none;
    background-color: #f2f2f2;
    font: inherit;
    transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
    cursor: text;
    font-size: 16px;
    font-weight: 400;
    max-height: 100%;
}
.btn {
    color: #ffffff !important;
    background-color: #e73d71 !important;
    border-radius:0 15px 15px 0 !important;
    text-transform: uppercase;
    letter-spacing: 3px;
    font-size: 1.125rem;
    border-style: none;
    text-align: center;
    font-weight: 700;
    padding: 10px 15px;
    font-family: "Lato", sans-serif !important;
    cursor: pointer;
}
</style>