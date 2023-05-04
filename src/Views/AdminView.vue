<template>
    <form @submit.prevent="send" v-if="data" class="Admin">
        <h1>Admin Panel</h1>
        <div v-if="data.data.Wrapper" class="Wrapper container">
            <h2>Wrapper-section</h2>
            <h4>title:</h4>
            <v-input v-model="data.data.Wrapper.title" class="input" />
            <h4>span:</h4>
            <v-input v-model="data.data.Wrapper.span" class="input" />
            <h4>description:</h4>
            <v-input v-model="data.data.Wrapper.description" class="input" type="textarea" />
            <h4>btn-name:</h4>
            <v-input v-model="data.data.Wrapper.btn" class="input" />
        </div>
        <div v-if="data.data.MainInfo" class="mainInfo container">
            <h2>MainInfo-section</h2>
            <h4>title:</h4>
            <v-input v-model="data.data.MainInfo.title" class="input" />
            <h4>span:</h4>
            <v-input v-model="data.data.MainInfo.span" class="input" />
            <h4>btn-name:</h4>
            <v-input v-model="data.data.MainInfo.btn" class="input" />
            <div class="mainInfoCards blocks">
                <div class="mainInfoCard block">
                    <h3>Card-1</h3>
                    <h4>title:</h4>
                    <v-input v-model="data.data.MainInfo.MainInfoCard[0].title" class="input" />
                    <h4>description:</h4>
                    <v-input v-model="data.data.MainInfo.MainInfoCard[0].description" class="input" type="textarea" />
                </div>
                <div class="mainInfoCard block">
                    <h3>Card-2</h3>
                    <h4>title:</h4>
                    <v-input v-model="data.data.MainInfo.MainInfoCard[1].title" class="input" />
                    <h4>description:</h4>
                    <v-input v-model="data.data.MainInfo.MainInfoCard[1].description" class="input" type="textarea" />
                </div>
                <div class="mainInfoCard block">
                    <h3>Card-3</h3>
                    <h4>title:</h4>
                    <v-input v-model="data.data.MainInfo.MainInfoCard[2].title" class="input" />
                    <h4>description:</h4>
                    <v-input v-model="data.data.MainInfo.MainInfoCard[2].description" class="input" type="textarea" />
                </div>
                <div class="mainInfoCard block">
                    <h3>Card-4</h3>
                    <h4>title:</h4>
                    <v-input v-model="data.data.MainInfo.MainInfoCard[3].title" class="input" />
                    <h4>description:</h4>
                    <v-input v-model="data.data.MainInfo.MainInfoCard[3].description" class="input" type="textarea" />
                </div>
            </div>

        </div>
        <div v-if="data.data.OurWay" class="OurWay container">
            <h2>OurWay-section</h2>
            <v-input v-model="data.data.OurWay.title" class="input" />
            <div class="OurWayCards blocks">
                <div class="OurWayCard block">
                    <h3>Card-1</h3>
                    <h4>title:</h4>
                    <v-input v-model="data.data.OurWay.OurWayCard[0].num" class="input" />
                    <h4>description:</h4>
                    <v-input v-model="data.data.OurWay.OurWayCard[0].description" class="input" type="textarea" />
                </div>
                <div class="OurWayCard block">
                    <h3>Card-2</h3>
                    <h4>title:</h4>
                    <v-input v-model="data.data.OurWay.OurWayCard[1].num" class="input" />
                    <h4>description:</h4>
                    <v-input v-model="data.data.OurWay.OurWayCard[1].description" class="input" type="textarea" />
                </div>
                <div class="OurWayCard block">
                    <h3>Card-3</h3>
                    <h4>title:</h4>
                    <v-input v-model="data.data.OurWay.OurWayCard[2].num" class="input" />
                    <h4>description:</h4>
                    <v-input v-model="data.data.OurWay.OurWayCard[2].description" class="input" type="textarea" />
                </div>
                <div class="OurWayCard block">
                    <h3>Card-4</h3>
                    <h4>title:</h4>
                    <v-input v-model="data.data.OurWay.OurWayCard[3].num" class="input" />
                    <h4>description:</h4>
                    <v-input v-model="data.data.OurWay.OurWayCard[3].description" class="input" type="textarea" />
                </div>
            </div>
        </div>
        <div v-if="data.data.GetFreeConsultation" class="GetFreeConsultation container">
            <h2>Consultation-section</h2>
            <h4>title:</h4>
            <v-input v-model="data.data.GetFreeConsultation.title" class="input" />
            <h4>description:</h4>
            <v-input v-model="data.data.GetFreeConsultation.description" class="input" type="textarea" />
        </div>
        <div v-if="data.data.features" class="features container">
            <h2>Features-section</h2>
            <h4>title:</h4>
            <v-input v-model="data.data.features.title" class="input" />
            <h4>span:</h4>
            <v-input v-model="data.data.features.span" class="input" />
            <h4>description:</h4>
            <v-input v-model="data.data.features.description" class="input" type="textarea" />
            <div class="featuresCards blocks">
                <div class="featuresCard block">
                    <h3>Card-1</h3>
                    <h4>title:</h4>
                    <v-input v-model="data.data.features.featuresCards[0].title" class="input" />
                    <ul class="list">
                        <li>
                            <h4>list-1:</h4>
                            <v-input v-model="data.data.features.List[0].list1" class="input" />
                        </li>
                        <li>
                            <h4>list-2:</h4>
                            <v-input v-model="data.data.features.List[0].list2" class="input" />
                        </li>
                        <li>
                            <h4>list-3:</h4>
                            <v-input v-model="data.data.features.List[0].list3" class="input" />
                        </li>
                        <li>
                            <h4>list-4:</h4>
                            <v-input v-model="data.data.features.List[0].list4" class="input" />
                        </li>
                    </ul>
                </div>
                <div class="featuresCard block">
                    <h3>Card-2</h3>
                    <h4>title:</h4>
                    <v-input v-model="data.data.features.featuresCards[1].title" class="input" />
                    <ul class="list">
                        <li>
                            <h4>list-1:</h4>
                            <v-input v-model="data.data.features.List[1].list1" class="input" />
                        </li>
                        <li>
                            <h4>list-2:</h4>

                            <v-input v-model="data.data.features.List[1].list2" class="input" />
                        </li>
                        <li>
                            <h4>list-3:</h4>

                            <v-input v-model="data.data.features.List[1].list3" class="input" />
                        </li>
                        <li>
                            <h4>list-4:</h4>

                            <v-input v-model="data.data.features.List[1].list4" class="input" />
                        </li>
                    </ul>
                </div>
                <div class="featuresCard block">
                    <h3>Card-3</h3>
                    <h4>title:</h4>
                    <v-input v-model="data.data.features.featuresCards[2].title" class="input" />
                    <ul class="list">
                        <li>
                            <h4>list-1:</h4>
                            <v-input v-model="data.data.features.List[2].list1" class="input" />
                        </li>
                        <li>
                            <h4>list-2:</h4>
                            <v-input v-model="data.data.features.List[2].list2" class="input" />
                        </li>
                        <li>
                            <h4>list-3:</h4>
                            <v-input v-model="data.data.features.List[2].list3" class="input" />
                        </li>
                        <li>
                            <h4>list-4:</h4>
                            <v-input v-model="data.data.features.List[2].list4" class="input" />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div v-if="data.data.GetYoursToday" class="GetYoursToday container">
            <h2>GetYoursToday-section</h2>
            <h4>title:</h4>
            <v-input v-model="data.data.GetYoursToday.title" class="input" />
            <h4>description:</h4>
            <v-input v-model="data.data.GetYoursToday.description" type="textarea" class="input" />
            <h4>btn-name:</h4>
            <v-input v-model="data.data.GetYoursToday.btn" class="input" />
            <h4>List:</h4>
            <ul class="list">
                <div class="list1">
                    <li>
                        <v-input v-model="data.data.GetYoursToday.list[0].list1" class="input" />
                    </li>
                    <li>
                        <v-input v-model="data.data.GetYoursToday.list[0].list2" class="input" />
                    </li>
                    <li>
                        <v-input v-model="data.data.GetYoursToday.list[0].list3" class="input" />
                    </li>
                </div>
                <div class="list2">
                    <li>
                        <v-input v-model="data.data.GetYoursToday.list[1].list1" class="input" />
                    </li>
                    <li>
                        <v-input v-model="data.data.GetYoursToday.list[1].list2" class="input" />
                    </li>
                    <li>
                        <v-input v-model="data.data.GetYoursToday.list[1].list3" class="input" />
                    </li>
                </div>
                <div class="list3">
                    <li>
                        <v-input v-model="data.data.GetYoursToday.list[2].list1" class="input" />
                    </li>
                    <li>
                        <v-input v-model="data.data.GetYoursToday.list[2].list2" class="input" />
                    </li>
                    <li>
                        <v-input v-model="data.data.GetYoursToday.list[2].list3" class="input" />
                    </li>
                </div>
            </ul>

        </div>
        <div v-if="data.data.personExp" class="PersonExp container">
            <h2>PersonExp-section</h2>
            <h4>title:</h4>
            <v-input v-model="data.data.personExp.title" class="input" />
            <h4>span:</h4>
            <v-input v-model="data.data.personExp.span" class="input" />
            <div class="PersonExpCards blocks">
                <div class="PersonExpCard block">
                    <h3>Card-1</h3>
                    <h4>name:</h4>
                    <v-input v-model="data.data.personExp.personExpCard[0].name" class="input" />
                    <h4>description:</h4>
                    <v-input v-model="data.data.personExp.personExpCard[0].description" type="textarea" class="input" />
                </div>
                <div class="PersonExpCard block">
                    <h3>Card-2</h3>
                    <h4>name:</h4>
                    <v-input v-model="data.data.personExp.personExpCard[1].name" class="input" />
                    <h4>description:</h4>
                    <v-input v-model="data.data.personExp.personExpCard[1].description" type="textarea" class="input" />
                </div>
                <div class="PersonExpCard block">
                    <h3>Card-3</h3>
                    <h4>name:</h4>
                    <v-input v-model="data.data.personExp.personExpCard[2].name" class="input" />
                    <h4>description:</h4>
                    <v-input v-model="data.data.personExp.personExpCard[2].description" type="textarea" class="input" />
                </div>
            </div>
        </div>
        <PreLoader v-if="isLoading" />
        <v-button class="btn">Save Data</v-button>
    </form>
</template>

<script setup>
import { reactive, ref } from 'vue';
import { fetchData, sendDataStrapi } from '../api/request';

let isLoading = ref(false)
const data = reactive({
    data: {}
})

fetchData().then((res) => {
    data.data = res.data
})
const send = (e) => {
    e.preventDefault,
    isLoading.value = true
    sendDataStrapi(data.data).finally(()=>{
        isLoading.value = false
    })
}
</script>

<style scoped>
.Admin {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    max-width: 1200px;
    gap: 20px;
    padding: 50px;
    flex-wrap: nowrap;
}

.container {
    display: flex;
    flex-direction: column;
    gap: 20px;
    max-width: 100%;
    flex-wrap: nowrap;
    text-align: center;

}

.blocks {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 50px;
}

.block {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.list {
    display: flex;
    gap: 5px;
}

li {
    list-style: none;
}


.input {
    max-width: 100%;
    padding: 10px 12px;
    border: solid 1px #e5e5e5;
    stroke: none;
    background-color: #f2f2f2;
    border-radius: 5px;
    font: inherit;
    transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
    cursor: text;
    font-size: 16px;
    font-weight: 400;
    max-height: 100%;
    text-align: center;
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
    padding: 10px 100px;
    font-family: "Lato", sans-serif !important;
    cursor: pointer;
}

.btn:hover {
    background-color: #111111 !important;
}
</style>