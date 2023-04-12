<template>
    <section class="logos">
        <h2 class="logos__title">
            When working  with us, <span>
                you're in good company:
            </span>
        </h2>
        <div class="logos__img">
            <img src="../../img/Logos/logoAmazon.svg" alt="Amazon">
            <img src="../../img/Logos/logoBinance.svg" alt="Binance">
            <img src="../../img/Logos/logoEvga.svg" alt="Evga">
            <img src="../../img/Logos/logoTesla.svg" alt="Tesla">
            <img src="../../img/Logos/logoSony.svg" alt="Sony">
            <img src="../../img/Logos/logoCrocs.svg" alt="Crocks">
            <img src="../../img/Logos/logoCrolla.svg" alt="Crolla">
            <img src="../../img/Logos/logoAsos.svg" alt="Asos">
        </div>
    </section>
</template>

<style scoped>
.logos{
    background: #e73d71;
    min-height: 494px;
}
.logos__title{
    margin: 53px auto 0;
    padding-top: 53px;
    max-width: 735px;
    color: white;
    font-size: 3.4375rem;
    line-height: 1.1;
    font-weight: 400;
    text-align: center;
    
}
.logos__title span{
    font-weight: 700;
}


.logos__img{
    display: flex;
    flex-direction: row;
    max-width: 735px;
    flex-wrap: wrap;
    margin: 35px auto 53px;

}
img{
    object-fit: contain;
    width: 25%;
    padding: 35px 20px;
}
@media (max-width: 767px) {
    img{
    width: 50%;
    margin: 0 auto;
    padding: 50px;
}
}
@media (max-width: 535px) {
    .logos__title{
        font-size: 1.875rem;
    }
    img{
    width: 75%;
    margin: 0 auto;
}
}
</style>