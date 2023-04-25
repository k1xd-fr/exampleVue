<template>
    <div class="FormInfoItem">
        <slot name="icon" class="icon" />
        <div class="title">
            <h5>{{ title }}</h5>
            <p>
                {{ info }}
                <br>
                <a :href="href">{{ link }}</a>
                <a :href="href" class="link">{{ address }} <br>{{ add2 }}</a>
            </p>
        </div>
    </div>
</template>

<script setup>
// eslint-disable-next-line no-unused-vars
const props = defineProps({
    title: {
        type: String,
        default: "Not Found"
    },
    info: {
        type: String,
        default: " "
    },
    link: {
        type: String,
        default: " ",
    },
    href: {
        type: String,
        default: ""
    },
    address: {
        type: String,
        default: ""
    },
    add2:{
        type:String,
        default:""
    }

})
</script>

<style scoped>
.FormInfoItem {
    display: flex;
    gap: 20px;
    padding: 20px 30px 15px 10px;
    justify-content: flex-start;
    text-align: center;
    align-items: start;
}

.title {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    text-align: start;
    max-width: 347px;
    gap: 10px;
}

h5 {
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: 1px;
    font-size: 1.375rem;
    line-height: 1.1;
    color: white;
}

p {
    max-width: 277px;
    font-size: 1.125rem;
    line-height: 2.2;
    font-weight: 600;
    color: #e5e5e5;
}

a {
    color: #e73d71;
    font-size: 18px;
    font-weight: 600;
    line-height: 39.6px;
    text-decoration: none;
    font-family: "Open Sans", sans-serif;
    border-bottom: 1px solid;
}

.link {
    color: white;
    border: 0;
    width: 250px;
}

.link:hover {
    color: gainsboro;
}

p {
    max-width: 347px;
}</style>