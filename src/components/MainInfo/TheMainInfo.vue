
<script setup>
import MainInfoCard from './MainInfoCard.vue';
import { ref } from 'vue';
import { fetchData } from '../../api/request';

const showModal = ref(false)

const toggleModal = () => {
    showModal.value = !showModal.value
}

let dataCard = null
const data = ref()
fetchData().then((resp)=>{
    data.value = resp.data.MainInfo;
    dataCard = resp.data.MainInfo.MainInfoCard
})
</script>

<template>
    <section v-if="data" class="container">
        <div class="MainInfo">

            <h2 class="info__title">
                {{ data.title }}
                <br>
                <span style="font-weight: 700 ;">
                    {{ data.span }}
                </span>
            </h2>

        </div>
        <div>
            <div style="min-height:330px ;">
                <div class="MainInfoFoot">
                    <div class="MainInfoCards">
                        <MainInfoCard :title="dataCard[0].title" :description=" dataCard[0].description">
                            <HomeIcon class="imgIcon" />
                            <template #circle>
                                <div class="circle pink">
                                </div>
                            </template>
                        </MainInfoCard>
                        <MainInfoCard :title="dataCard[1].title" :description=" dataCard[1].description">
                            <CartIcon class="imgIcon" />
                            <template #circle>
                                <div class="circle green">
                                </div>
                            </template>
                        </MainInfoCard>
                        <MainInfoCard :title="dataCard[2].title" :description=" dataCard[2].description">
                            <CodeIcon class="imgIcon" />
                            <template #circle>
                                <div class="circle blue">
                                </div>
                            </template>
                        </MainInfoCard>
                        <MainInfoCard :title="dataCard[3].title" :description=" dataCard[3].description">
                            <TeamIcon class="imgIcon" />
                            <template #circle>
                                <div class="circle orange">
                                </div>
                            </template>
                        </MainInfoCard>

                    </div>
                </div>
            </div>
        </div>
        <div style="display: flex; justify-content: center;">
            <v-button class="btn" :click="toggleModal">{{ data.btn }}</v-button>
            <transition name="fade">
                <VBackdrop v-if="showModal" @close="showModal = false"></VBackdrop>
            </transition>
            <transition name="slide-down">
                <VModal v-if="showModal" @close="showModal = false" :title="'My Modal Title'"
                    :content="'Some modal content.'">
                </VModal>
            </transition>
        </div>
    </section>
</template>
<style scoped >
.container {
    max-width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;

}

.MainInfo {
    padding: 85px 60px 30px;
    background-color: #d9d9d9;
    height: 388px;
}

.MainInfoFoot {
    position: relative;
    min-height: auto;
    margin: 0 auto;
    max-width: 1140px;
}

.MainInfoCards {
    position: absolute;
    top: -75px;
    display: flex;
    gap: 15px;

}

.info__title {
    color: inherit;
    text-align: center;
    max-width: 886px;
    font-size: 3.4375rem;
    margin: 0 auto;
    font-weight: 400;
    line-height: 1.1;
}

.btn {
    color: #111111;
    background-color: #ffffff;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 1.125rem;
    letter-spacing: 3px;

    background-image: none;
    margin: 20px auto 60px;
    padding: 15px 40px;
    border: #404040 solid 2px !important;
    border-radius: 10px !important;
    cursor: pointer;
}

.btn:hover {
    background-color: #111111 !important;
    color: white;
}

@media (max-width: 1199px) {
    .MainInfoCards {
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        padding: 30px;
    }
    .btn{
        margin-top: 400px;
    }
}

@media (max-width: 767px) {
    .info__title {
        font-size: 2.5rem;
    }

}

@media (max-width: 655px) {
    .info__title {
        font-size: 1.875rem;
    }
    .btn{
        margin-top: 1200px;
    }
}
@media (max-width: 325px) {
    .btn{
        margin-top: 1400px;
    }
}
</style>