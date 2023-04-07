
<template>
    <section class="container wrapper">
        <div class="container ">
            <div class="info">
                <h1>
                    We create <span class="black-text">online shops</span>
                </h1>
                <p class="p">
                    Accumsan in nisl nisi scelerisque. Sapien nec sagittis aliquam malesuada bibendum arcu vitae. Maecenas
                    ultricies mi eget mauris pharetra et ultrices neque.
                </p>
                <p>
                    Image from <span><a class="link-freepik" href="https://www.freepik.com/">Freepik</a></span>
                </p>
                <a href="https://nicepage.com/c/counter-html-templates"><v-button class="btn">read more</v-button></a>
            </div>
            <img src="../../img/ShoppingConcepts.jpeg" alt="ShoppingConcepts">
        </div>
    </section>
</template>

<style scoped>
.container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    background-color: rgb(220, 220, 220);
    min-height: 700px;
    max-width: 100%;
    width: calc(((100% - 1140px) / 2) + 1140px);
    margin: 0 0 0 auto;
}

.wrapper {
    background-color: rgb(220, 220, 220);
    width: 100% !important;
}

.info {
    padding: 50px 30px;
    max-width: 414px;
    display: flex;
    flex-direction: column;
    gap: 30px;
}

.btn {
    color: #ffffff !important;
    background-color: #e73d71 !important;
    border-radius: 10px !important;
    text-transform: uppercase;
    letter-spacing: 3px;
    font-size: 1.125rem;
    border-style: none;
    text-align: center;
    font-weight: 700;
    padding: 16px 52px 17px 51px;
    font-family: "Lato", sans-serif !important;
    cursor: pointer;
}

.btn:hover {
    background-color: #111111 !important;
}

h1 {
    font-size: 3rem;
    font-weight: 400;
    max-width: 353.25px;
    line-height: 1.1;
    font-style: normal;
    margin-top: 68px;
}

.p {
    max-width: 353.25px;
    line-height: 1.8;
    font-size: 1.125rem;
    font-weight: 400;
    font-style: normal;
}

p {
    max-width: 353.25px;
    line-height: 1.8;
    font-size: 1.125rem;
    font-weight: 500;
    font-style: normal;
}

.black-text {
    color: #111111;
    font-weight: 700;
}

.link-freepik {
    text-decoration: underline black;
    color: #111111;
    font-size: inherit;
    font-family: inherit;
    line-height: inherit;
    letter-spacing: inherit;
    text-transform: inherit;
}

.link-freepik:hover {
    text-decoration: underline #e73d71;
}

img {
    max-width: 849px;
}
</style>


