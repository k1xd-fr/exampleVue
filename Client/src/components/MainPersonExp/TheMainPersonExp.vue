<template>
    <section v-if="data" class="PersonExp">
        <h2>{{ data.title }}<span>{{ data.span }}</span></h2>
        <div class="Cards"> 
            <person-exp-card :name="dataCard[0].name" :description="dataCard[0].description" class="blue" :src="dataCard[0].img[0].url"/>
            <person-exp-card :name="dataCard[1].name" :description="dataCard[1].description" class="green" :src="dataCard[1].img[0].url"/>
            <person-exp-card :name="dataCard[2].name" :description="dataCard[2].description" class="purple" :src="dataCard[2].img[0].url"/>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue';
import { fetchData } from '../../api/request';
import PersonExpCard from './PersonExpCard.vue'

const data = ref()
let dataCard = null
fetchData().then((resp)=>{
    data.value = resp.data.personExp
    dataCard = resp.data.personExp.personExpCard
})
</script>

<style scoped>
.PersonExp{
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    padding: 60px;
    gap: 90px;
}
.PersonExp h2{
    font-size: 3.4375rem;
    line-height: 1.1;
    font-weight: 400;
    max-width: 898px;
}
.PersonExp h2 span{
    font-weight: 700;
}

.Cards{
 display: flex;
 gap: 30px;
 align-items: center;
 justify-content: center;
 flex-wrap: wrap;
}
@media (max-width:576px) {
    .PersonExp h2{
        font-size: 1.875rem;
    }
    .Cards{
        gap: 70px;
    }
}

.blue{
    background-color: #5985c3 !important;
}
.green{
    background-color: #4fbdc0 !important;
}
.purple{
    background-color: #e73d71 !important;
}
</style>