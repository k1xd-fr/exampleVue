<template>
    <section v-if="data" class="logos">
        <h2 class="logos__title">
            {{ data.title }}
            <span>
                {{ data.span }}
            </span>
        </h2>
        <div class="logos__img">
            <img :src="logos[0].img[0].url" alt="Amazon">
            <img :src="logos[1].img[0].url" alt="Binance">
            <img :src="logos[2].img[0].url" alt="Evga">
            <img :src="logos[3].img[0].url" alt="Tesla">
            <img :src="logos[4].img[0].url" alt="Sony">
            <img :src="logos[5].img[0].url" alt="Crocks">
            <img :src="logos[6].img[0].url" alt="Crolla">
            <img :src="logos[7].img[0].url" alt="Asos">
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue';
import { fetchData } from '../api/request';

const data = ref()
let logos = [];
fetchData().then((resp) => {
    data.value = resp.data.Logos
    logos = resp.data.Logos.Logo
}).catch(err => {
    console.log(err);
})

</script>
<style scoped>
.logos {
    background: #e73d71;
    min-height: 494px;
}

.logos__title {
    margin: 0 auto;
    padding-top: 53px;
    max-width: 735px;
    color: white;
    font-size: 3.4375rem;
    line-height: 1.1;
    font-weight: 400;
    text-align: center;

}

.logos__title span {
    font-weight: 700;
}


.logos__img {
    display: flex;
    flex-direction: row;
    max-width: 735px;
    flex-wrap: wrap;
    margin: 35px auto 53px;

}

img {
    object-fit: contain;
    width: 25%;
    padding: 35px 20px;
}

@media (max-width: 767px) {
    img {
        width: 50%;
        margin: 0 auto;
        padding: 50px;
    }
}

@media (max-width: 535px) {
    .logos__title {
        font-size: 1.875rem;
    }

    img {
        width: 75%;
        margin: 0 auto;
    }
}
</style>