<script setup>
import { ref } from "vue";
import VInput from "./shared/VInput.vue"

const contact = ref({
    name: '',
    email: '',
}) 

</script>
<template>
    <section class="consult">
        <div class="consult_container">
            <h2 class="consult__title">Get Free Consultation</h2>
            <p class="consult__p">Want to create your online store and improve your sales? Our Company is the one and only
                solution you need to
                build your online business.</p>
            <div class="container">
                <form class="form">
                    <div class="form-group">
                        <label class="label">Name</label>
                        <v-input :v-model="contact" class="input" id="name-id" name="name" placeholder="Enter your Name"></v-input>
                    </div>
                    <div class="form-group">
                        <label class="label">Email</label>
                        <v-input :v-model="contact" class="input" id="email-id" name="email"
                            placeholder="Enter a valid email address"></v-input>
                    </div>
                    <div class="form-group">
                        <v-button class="btn">Submit</v-button>
                    </div>

                </form>
            </div>
        </div>
    </section>
</template>
<style scoped>
.consult {
    background-color: #e73d71;
    text-align: center;
}

.consult__title {
    color: rgb(255, 255, 255);
    font-size: 55px;
    font-weight: 400;
    line-height: 60.6px;

}

.consult__p {
    font-size: 20px;
    line-height: 36px;
    text-align: center;
    color: rgb(253, 234, 240);
    max-width: 843px;
}

.consult_container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 413px;
    gap: 25px;
}

.container {
    background-color: rgb(245, 245, 245);
    border-radius: 8px !important;
    width: 856px;
    margin: 33px auto 60px;
    max-width: 858px;
}

.form {
    display: flex;
    align-items: center;
    padding: 23px;
    gap: 13px;
}

.form-group {
    display: flex;
    flex: 0 0 auto;
    flex-flow: row nowrap;
    align-items: center;
    margin-bottom: 0;
    flex-grow: 1;
}

.input {
    display: flex;
    width: 251px;
    vertical-align: middle;
    flex-grow: 1;
    flex-shrink: 1;
    min-width: 0px;
    align-items: center;
    justify-content: center;
    margin-bottom: 0;
    border-radius: 4px !important;
    padding: 10px 12px;
    border: none;
    height: auto;
    cursor: text;
    font-size: 16px;
    font-family: "Open Sans", sans-serif;
    font-weight: 400;
}

.label {
    align-items: center;
    color: rgb(17, 17, 17);
    display: flex;
    flex-grow: 0;
    font-size: 16px;
    font-family: "Open Sans", sans-serif;
    font-weight: 400;
    justify-content: center;
    line-height: 25.6px;
    margin-right: 10px;
}

.btn {
    text-transform: uppercase;
    font-weight: 700;
    color: #ffffff !important;
    background-color: #e73d71 !important;
    border-radius: 4px !important;
    cursor: pointer;
    font-size: 16px;
    font-family: "Open Sans", sans-serif;
    line-height: 25.6px;
    border: 0 none transparent;
    text-align: center;
    padding: 10px 30px;
}</style>