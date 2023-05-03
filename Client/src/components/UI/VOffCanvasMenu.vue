<template>
    <transition name="slide-down">
        <div :class="{ active: active }" id="mySidenav" class="sidenav">
            <a href="javascript:void(0)" class="closebtn" @click="click">&times;</a>
            <div class="link">
                <a href="/">Home</a>
            </div>
        </div>
    </transition>
    <transition name="fade">
        <VBackdrop @close=" click " v-if="active"></VBackdrop>
    </transition>
</template>

<script setup>
import VBackdrop from './VBackdrop.vue';

// eslint-disable-next-line no-unused-vars
const props = defineProps({
    active: {
        type: Boolean
    },
    click: {
        type: Function
    }
})
</script>

<style scoped>
.sidenav {
    height: 100vh;
    width: 20vw;
    position: fixed;
    z-index: 100000;
    top: 0;
    left: 0;
    background-color: #111;
    padding-top: 60px;
    transition: 0.2s;
    transform: translateX(-100%);
}

.active {
    transform: translateX(0);
}

.sidenav a {
    text-decoration: none;
    font-size: 30px !important;
    color: #ffffff;
    display: block;
    transition: 0.3s;
}

.sidenav a:hover {
    color: #ffffff;
}

.sidenav .closebtn {
    position: absolute;
    top: 0;
    right: 25px;
    font-size: 36px;
    margin-left: 50px;
}

.link{
    display: flex;  
    padding: 20px 10px;
    align-items: center;
    text-align: center;
    justify-content: center;
}

@media screen and (max-height: 450px) {
    .sidenav {
        padding-top: 15px;
    }

    .sidenav a {
        font-size: 18px;
    }
}
</style>