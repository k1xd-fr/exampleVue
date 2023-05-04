<template>
    <section class="Form">
        <MainFormInfo/>
        <MainForm/>
    </section>
</template>

<script setup>
import MainForm from './MainForm.vue';
import MainFormInfo from './MainFormInfo.vue';
</script>

<style scoped>
.Form{
    display: flex;
    justify-content: center;
    padding: 50px;
    background-color: rgb(217, 217, 217);
    flex-wrap: wrap;

}
</style>