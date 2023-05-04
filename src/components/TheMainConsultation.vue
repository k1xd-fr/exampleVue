<script setup>
import { ref } from 'vue'
import { fetchData, sendData } from '../api/request'

let success = ref(false)

const name = ref('')
const email = ref('')

const submitForm = (e) => {
  e.preventDefault()
  const data = {
    name: name.value,
    email: email.value
  }
  sendData(data).then(() => {
    success.value = true
    setTimeout(() => {
      success.value = false
    }, 2000)
  })
}
const data = ref()
fetchData().then((resp)=>{
    data.value = resp.data.GetFreeConsultation
})
</script>
<template>
  <section v-if="data" class="consult">
    <div class="consult_container">
      <h2 class="consult__title">{{ data.title }}</h2>
      <p class="consult__p">
        {{ data.description }}
      </p>
      <div class="container">
        <form @submit.prevent="submitForm" class="form">
          <div class="form-group">
            <label class="label">Name
            <v-input
              v-model="name"
              class="input"
              name="name"
              type="text"
              placeholder="Enter your Name"
            />
            </label>
          </div>
          <div class="form-group">
            <label class="label">Email
            <v-input
              v-model="email"
              class="input"
              name="email"
              type="email"
              placeholder="Enter a valid Email address"
            />
            </label>
          </div>
          <div class="form-group mw">
            <v-button class="btn">Submit</v-button>
          </div>
        <div :class="{active:success}" class="success" >
          <h3>Thank you! Your message has been sent.</h3>
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
  margin-top: 80px;
}

.consult__title {
  color: rgb(255, 255, 255);
  font-size: 55px;
  font-weight: 400;
  line-height: 60.6px;
  padding: 10px;
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
.success{
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;

    color: #ffffff;

    background: #62C584;
    transform: translateY(500%);
    transition: 0.5s;
    visibility: hidden;
    opacity: 0;
}
.active{
  visibility: visible;
  transform: translateY(0);
  opacity: 1;
}

.container {
  background-color: rgb(245, 245, 245);
  border-radius: 8px !important;
  width: 856px;
  position: relative;
  margin: 10px;
}

.form {
  display: flex;
  align-items: center;
  padding: 23px;
  gap: 13px;
  position: relative;
  overflow: hidden;
  width: 100%;
}

.form-group {
  display: flex;
  align-items: center;
  width: 100%;
  flex-grow: 1;
}

@media (max-width: 991px) {
  .form {
    justify-content: center;
    margin: 0 auto;
  }
  .container{
    width: 720px;
  }

}

@media (max-width: 767px) {

  .form {
    flex-direction: column;
    max-width: 100%;
  }
  .container{
    width: 540px;
  }
  .btn {
    width: 100%;
  }
  .mw{
    max-width: 100% !important;
  }
}
@media (max-width: 575px) {
  .consult__title {
    font-size: 30px;
  }
.container{
  width: 90%;
  margin: 50px !important;
  }
}
.input {
  border-radius: 4px !important;
  width: 100%;
  padding: 10px 12px;
  border: none;
  cursor: text;
  font-size: 16px;
  display: inline;
}
.input::placeholder{
  font-family: 'Open Sans', sans-serif;
  font-weight: 400;
  font-size: 16px;
}

.label {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  color: rgb(17, 17, 17);
  font-size: 16px;
  font-family: 'Open Sans', sans-serif;
  font-weight: 400;
  flex-grow: 1;

}

.btn {
  text-transform: uppercase;
  font-weight: 700;
  color: #ffffff !important;
  background-color: #e73d71 !important;
  border-radius: 4px !important;
  cursor: pointer;
  font-size: 16px;
  font-family: 'Open Sans', sans-serif;
  line-height: 25.6px;
  border: 0 none transparent;
  text-align: center;
  padding: 10px 30px;
}
.mw{
  max-width: max-content;
}
</style>