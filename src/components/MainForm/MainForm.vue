<template>
    <div>
        <form class="Form" @submit.prevent="submitForm">
            <h2>Level up your brand</h2>
            <p>You can reach us anytime via <a href="https://nicepage.com/c/tabs-website-templates">hi@ourcompany.com</a>
            </p>
            <div class="FormInputs">
                <label class="label">Name
                    <v-input v-model="name" class="input" name="name" type="text" placeholder="Enter your Name" />
                </label>
                <label class="label">Email
                    <v-input v-model="email" class="input" name="email" type="email"
                        placeholder="Enter a valid email address" />
                </label>
                <label class="label">Phone
                    <v-input v-model="number" class="input" name="phone" type="number"
                        placeholder="Enter your phone (e.g.+14155552675)" />
                </label>
                <label class="label">How can we help?
                    <v-input cols="50" rows="4" v-model="massage" class="input" name="massage" type="textarea" placeholder=" " />
                </label>
                <v-button class="btn">Submit</v-button>
            </div>
        </form>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { sendData } from '../../api/request';


const name = ref('')
const email = ref('')
const number = ref('')
const massage = ref('')
const submitForm = (e) => {
    e.preventDefault()
    const data = {
        name: name.value,
        email: email.value,
        number: number.value,
        massage: massage.value
    };
    sendData(data)
}
</script>

<style scoped>
.Form {
    max-width: 590px;
    height: 100%;
    display: flex;
    background-color: rgb(41, 51, 51);
    flex-direction: column;
    padding: 50px;
    gap: 10px;
    background-color: white;
}

.Form h2 {
    font-weight: 700;
    font-size: 3.4375rem;
    line-height: 1.1;
    max-width: 384px;
}
.Form p{
    font-size: 1.125rem;
    color: #111111;
}
.Form p a{
    text-decoration: none;
    border-bottom: solid #e73d71 1px;
    color: #e73d71;
    font-weight: 600;
}

.FormInputs {
    display: flex;
    flex-direction: column;
    gap: 20px;
}
.FormInputs label{
    font-family: "Open Sans", sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 25.6px;
    display: flex;
    flex-direction: column;
}
.FormInputs label input{
    width: 100%;
    padding: 10px 12px;
    border: solid 1px #e5e5e5;
    stroke: none;
    background-color: #f2f2f2;
    border-radius: 5px;
    font: inherit;
    transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
    font-size: 16px;
    font-weight: 400;
}
.FormInputs label textarea{
    width: 100%;
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
}
.btn{
    color: white;
    background-color: #e73d71;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1px;
    width: 100%;
    padding: 14px 0 15px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: inherit;
}
</style>