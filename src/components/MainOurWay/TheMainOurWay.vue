<template>
    <section v-if="data" class="OurWay">
        <h2>{{ data.title }}</h2>
        <div class="OurWayCards">
            <div class="mt">
                <OurWayCard style="max-width: 250px; min-height: 250px" :num="dataCard[1].num"
                    :desciption="dataCard[1].description" class="pink OurWayCard1" />
            </div>
            <div class="OurWayMaxCards">
                <OurWayCard :num="dataCard[0].num" :desciption="dataCard[0].description" class="green mr maxCard" />
                <OurWayCard :num="dataCard[3].num" :desciption="dataCard[3].description" class="blue ml maxCard" />
            </div>
            <div class="mb">
                <OurWayCard style="max-width: 250px; min-height: 250px" :num="dataCard[2].num"
                    :desciption="dataCard[2].description" class="black OurWayCard2" />
            </div>

        </div>
    </section>
</template>
<script setup>
import { ref } from 'vue';
import { fetchData } from '../../api/request';
import OurWayCard from './OurWayCard.vue';

const data = ref();

let dataCard = null

fetchData().then((resp) => {
    data.value = resp.data.OurWay
    dataCard = resp.data.OurWay.OurWayCard
})
</script>
<style scoped>
.OurWay {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 50px;
    gap: 50px;
}

.OurWayCards {
    position: relative;
    display: flex;
    gap: -30px;
    flex-direction: column;
    align-items: center;
    margin: -20px;
}

.OurWayMaxCards {
    display: flex;
    flex-direction: row;
    gap: 295px;
}

.mt {
    margin-top: 100px;
}

.mb {
    margin-bottom: 100px;
}

.ml {
    margin-left: 0px;
}

.mr {
    margin-right: 0px;
}

.OurWayCard1 {
    position: absolute;
    top: 0px;
    right: 38.5%;
}

.OurWayCard2 {
    position: absolute;
    bottom: -50px;
    right: 38.5%;
}

.maxCard {
    max-width: 400px;
    height: 400px
}

h2 {
    font-size: 3.4375rem;
    line-height: 1.1;
    font-weight: 400;

}

@media (max-width:1199px) {
    .OurWayMaxCards {
        display: flex;
        flex-direction: row;
        gap: 190px;
    }

    .mt {
        margin-top: 270px;
    }

    .mb {
        margin-bottom: 220px;
    }

    .OurWayCard1 {
        position: absolute;
        top: 0px;
        right: 37.5%;
    }

    .OurWayCard2 {
        position: absolute;
        bottom: -40px;
        right: 37.5%;
    }
}

@media (max-width:991px) {
    .OurWayCards {
        position: relative;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        margin: -20px;
        gap: 20px;
    }

    .mt {
        margin-top: 0px;
    }

    .mb {
        margin-bottom: 0px;
    }

    .mr {
        margin-right: 300px;
    }

    .ml {
        margin-left: 300px;
    }

    .OurWayCard1 {
        position: static;
    }

    .OurWayCard2 {
        position: static;
    }


    .OurWayMaxCards {
        display: flex;
        flex-direction: column;
        gap: 30px;

    }
}

@media (max-width:762px) {
    .mr {
        margin-right: 100px;
    }

    .ml {
        margin-left: 100px;
    }
}

@media (max-width:575px) {
    .maxCard {
        max-width: 250px;
        min-height: 250px
    }

    .ml,
    .mr {
        margin: 0;
    }
}




.blue {
    background-color: #5985c3 !important
}

.pink {
    background: #e73d71 !important
}

.green {
    background-color: #4fbdc0 !important
}

.black {
    background-color: #333333 !important
}
</style>