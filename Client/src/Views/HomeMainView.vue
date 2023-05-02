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
            <VModal @close="showModal = !showModal" v-if="showModal" :title="'Вход в Админ Панель'">
                <form @submit.prevent="login">
                    <label>
                        Password:
                        <input type="password" v-model="password">
                    </label>
                    <button type="submit">Login</button>
                </form>
            </VModal>
        </transition>
    </div>
    <main-footer />
</template>
<style scoped></style>