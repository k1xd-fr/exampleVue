<script setup>
import FormInfoItem from './FormInfoItem.vue';

</script>

<template>
    <div class="FormInfo">
        <div class="FormInfoTitle">
            <h2>
                Get in Touch
            </h2>
            <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
        </div>
        <div>
            <FormInfoItem title="CHART TO US" info="Our friendly team is here to help." link="hi@ourcompany.com">
                <template #icon>
                    <i class="icon-SmsIcon icons"></i>
                </template>
            </FormInfoItem>
            <FormInfoItem title="OFFICE" info="Come say hello at our office HQ." address="121 Rock Sreet, 21 Avenue,"
                add2="New York, NY 92103-9000">
                <template #icon>
                    <i class="icon-markIcon icons"></i>
                </template>
            </FormInfoItem>
            <FormInfoItem title="PHONE" info="Mon-Fri from 8am to 5am" link="+1(555)000-000">
                <template #icon>
                    <i class="icon-phoneIcon icons"></i>
                </template>
            </FormInfoItem>
        </div>
        <div class="socialIcon">
            <a href="https://ru-ru.facebook.com/">
                <FaceBook class="icon" />
            </a>
            <a href="https://ru-ru.facebook.com/">
                <instagram class="icon" />
            </a>
            <a href="https://ru-ru.facebook.com/">
                <InIcon class="icon" />
            </a>
            <a href="https://ru-ru.facebook.com/">
                <Pinterest class="icon" />
            </a>
            <a href="https://ru-ru.facebook.com/">
                <twitter class="icon" />
            </a>

        </div>
    </div>
</template>
<style scoped>
.FormInfo {
    max-width: 590px;
    display: flex;
    background-color: rgb(41, 51, 51);
    flex-direction: column;
    padding: 50px;
    gap: 20px;

}

.FormInfoTitle {
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.FormInfoTitle h2 {
    font-family: "Montserrat", sans-serif;
    font-weight: 400;
    font-size: 2.25rem;
    color: white;
}

.FormInfoTitle p {
    font-size: 1.125rem;
    font-weight: 300;
    color: whitesmoke;
}

.socialIcon {
    padding: 30px 20px 0 0;
    display: flex;
    gap: 20px;
}
a{
    max-width: max-content;
}
.icons {
    font-size: 22px;
    object-fit: contain;
    color: white;
    fill: white;
}

.icon {
    width: 29px;
    height: 29px;
    object-fit: contain;
    font-size: 29px;
    color: white;
    fill: white;
}

@media (max-width: 1110px) {
    .FormInfo {
        max-width: 558px;
    }
}</style>