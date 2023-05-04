
<script setup>

// eslint-disable-next-line no-unused-vars
const props = defineProps({
    title: String,
    description:String,
}
)

</script>
<template>
    <div  class="infoCard">
        <div class="infoCard__icon">
            <div class="iconCircle">
                <slot name="circle"></slot>
            </div>
            <span class="icon" style="z-index:10">
                <slot></slot>
            </span>
        </div>
        <h4>
            {{ title }}
        </h4>
        <p>
          {{ description }}
        </p>
    </div>
</template>
<style scoped>
.infoCard {
    border-radius: 10px !important;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    max-width: 290px;
    padding: 35px 20px;
    gap: 20px;
    text-align: center;
    background-color: white;
}

h4 {
    font-size: 1.25rem !important;
    font-weight: 700 !important;
    text-transform: none !important;
}
p{
    font-size: 0.888889rem;
    color: #808080 !important;
    line-height: 1.6;
}
.infoCard__icon {
    position: relative;
    padding: 20px;
    display: flex;
}

.iconCircle {
    position: relative;
}

.icon {
    position: absolute;
    top: 44%;
    left: -1%;
}
</style>