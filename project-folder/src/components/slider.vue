<template>
    <swiper class="swiper" :options="swiperOption" style="child-align: bottom">
        <swiper-slide v-for="(company,index) in companies" :key="index" style="align-items: center; height: 100%">
                <img
                        :src="getCompImgUrl(company.photo)"
                        style="width: 150px; height: 100%"
                >
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
</template>

<script>
    import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
    import 'swiper/swiper-bundle.css'

    export default {
        name: 'slider',
        title: 'Loop mode with multiple slides per group',
        components: {
            Swiper,
            SwiperSlide
        },
        directives: {
            swiper: directive
        },
        data() {
            return {
                swiperOption: {
                    slidesPerView: 4,
                    speed: 400,
                    spaceBetween: 30,
                    grabCursor: true,
                    autoplay: {
                        delay: 1000,
                        disableOnInteraction: false
                    },
                    loop: true,
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: false
                    }
                },
                companies: [
                    { name: "Católica Lisbon", photo: "catolica" },
                    { name: "Kepler Forensic Partners", photo: "kepler" },
                    { name: "Chartyn", photo: "chartyn" },
                    { name: "Outsystems", photo: "outsystems" },
                    { name: "NOVA SBE", photo: "nova" },
                    { name: "Técnico Lisboa", photo: "ist" },
                    { name: "Tranquilidade", photo: "tranquilidade" }
                    // { name: "Teixeira Duarte", photo: "td" },
                    // { name: "EDIT", photo: "edit" },
                    // { name: "ELU", photo: "elu" },
                    // { name: "Rumos", photo: "rumos" },
                    // { name: "ISQ", photo: "isq" },
                    // { name: "Tranquilidade", photo: "tranquilidade" }
                ],
            }
        },
        methods: {
            getCompImgUrl(pet) {
                var images = require.context("../assets/companies/", false, /\.png$/);
                return images("./" + pet + ".png");
            },
        }
    }
</script>

<style lang="scss" scoped>

</style>