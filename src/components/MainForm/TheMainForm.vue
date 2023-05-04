<template>
    <section v-if="data" class="Form">
        <MainFormInfo/>
        <MainForm/>
    </section>
</template>

<script setup>
import { fetchData } from '../../api/request';
import { ref } from 'vue';
import MainForm from './MainForm.vue';
import MainFormInfo from './MainFormInfo.vue';

const data = ref()

fetchData().then((resp) => {
    data.value = resp.data.Form
})
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