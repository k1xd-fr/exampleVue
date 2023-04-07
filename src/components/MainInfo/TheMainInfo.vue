
<script setup>
import CartIcon from '../icons/CartIcon.vue';
import CodeIcon from '../icons/CodeIcon.vue';
import HomeIcon from '../icons/HomeIcon.vue';
import TeamIcon from '../icons/TeamIcon.vue';
import MainInfoCard from './MainInfoCard.vue';
import VButton from '../shared/VButton.vue';
// eslint-disable-next-line no-unused-vars

</script>

<template>
    <section class="container">
        <div class="MainInfo">

            <h2 class="info__title">
                Everything you need
                <br>
                <span style="font-weight: 700 ;">
                    to sell products online
                </span>
            </h2>

        </div>
        <div>
            <div style="height:330px ;">
                <div class="MainInfoFoot">
                    <div class="MainInfoCards">
                        <MainInfoCard title="Customize your online store">
                            <HomeIcon class="imgIcon" />
                            <template #circle>
                                <div class="circle pink">
                                </div>
                            </template>
                        </MainInfoCard>
                        <MainInfoCard title="Run your ecommerce website">
                            <CartIcon class="imgIcon" />
                            <template #circle>
                                <div class="circle green">
                                </div>
                            </template>
                        </MainInfoCard>
                        <MainInfoCard title="Grow your revenue">
                            <CodeIcon class="imgIcon" />
                            <template #circle>
                                <div class="circle blue">
                                </div>
                            </template>
                        </MainInfoCard>
                        <MainInfoCard title="Team">
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
        <div style="display:flex; justify-content: center;">
            <a href="https://nicepage.com/c/counter-html-templates">
                <v-button class="btn">Learn more</v-button>
            </a>
        </div>
    </section>
</template>
<style scoped >
.container {
    max-width: 1470px;
    margin: 0 auto;
}

.MainInfo {
    padding: 85px 60px 30px;
    background-color: #d9d9d9;
    height: 388px;
}

.MainInfoFoot {
    position: relative;
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
    width: 886px;
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
</style>