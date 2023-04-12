<template>
    <section class="OurWay">
        <h2>Our way</h2>
        <div class="OurWayCards">
            <div class="mt">
                <OurWayCard style="max-width: 250px; min-height: 250px" num="2019" :desciption="desc[0]"
                    class="pink OurWayCard1" />
            </div>
            <div class="OurWayMaxCards">
                <OurWayCard num="2020" :desciption="desc[1]" class="green mr maxCard" />
                <OurWayCard num="2021" :desciption="desc[1]" class="blue ml maxCard" />
            </div>
            <div class="mb">
                <OurWayCard style="max-width: 250px; min-height: 250px" num="2022" :desciption="desc[0]"
                    class="black OurWayCard2" />
            </div>

        </div>
    </section>
</template>
<script setup>
import OurWayCard from './OurWayCard.vue';


const desc = ["Podcasting operational change management inside of workflows to establish a framework.", "Podcasting operational change management inside of workflows to establish a framework. Taking seamless key performance indicators offline to maximise the long tail."]

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

    .ml , .mr {
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
}</style>