<template>
    <section class="PersonExp">
        <h2>Our clients love the we build <span>stores experience</span></h2>
        <div class="Cards"> 
            <person-exp-card :name="name[0]" :description="desc[0]" class="blue" src="../../../img/personImg/person1.jpeg"/>
            <person-exp-card :name="name[1]" :description="desc[0]" class="green" src="../../../img/personImg/person2.jpeg"/>
            <person-exp-card :name="name[2]" :description="desc[0]" class="purple" src="../../../img/personImg/person3.jpeg"/>
        </div>
    </section>
</template>

<script setup>
import PersonExpCard from './PersonExpCard.vue'

const desc = ["Sample text. Click to select the text box. Click again or double click to start editing the text."]
const name =["Stella Larson" , "Nick Johnson", "Olga Ivanova"]
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