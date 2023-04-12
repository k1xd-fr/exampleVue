<script setup>

import { defineProps } from 'vue'
// eslint-disable-next-line no-unused-vars
const props = defineProps({
    num: {
        type:Number , 
        default: 2023,
    },
    desciption:{
        type:String,
        default:"Description"
    }
}
)
</script>
<template>
    <div class="OurWayCard">
        <h2 >{{ num }}</h2>
        <p>{{ desciption }}</p>
    </div>
</template>
<style scoped>
.OurWayCard{
    border-radius: 24px !important;
    padding: 30px;
    display: flex;
    flex-direction: column;
    text-align: center;
    padding: 30px;
    justify-content: center;
}
h2{
font-weight: 700;
font-size: 60px;
line-height: 66px;
color: white;
}
p{
    font-size: 16px;
    line-height: 25.6px;
    color: white;
}
@media (max-width:755px) {
    
}
</style>