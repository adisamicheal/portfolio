<template>
  <div class="body">
    <Header ref="home"/>
    <div class="portfolio__heading">
        <h1>Some of the projects I have worked on.</h1>
        <div class="portfolio__container">
            <div
                class="portfolio__container--work"
                v-for="(data, index) in portfolio" :key="index">
                    <img :src="require(`@/assets/portfolio/${data.image}`)" :alt="data.altText">
                    <p>{{ data.about }}</p>
                    <a
                        :href="data.link"
                        target="_blank"
                        rel="noopener noreferrer">See Project</a>
            </div>
        </div>
    </div>
    <Footer />
  </div>
</template>

<script lang="ts">
/* eslint-disable */
import { defineComponent } from 'vue'
import json from '../data/portfolio.json'
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import { useMeta } from 'vue-meta'

export default defineComponent({
    components: { Header, Footer },
    setup () {
        useMeta({
            title: 'Micheal Adisa - Portfolio',
            htmlAttrs: { lang: 'en', amp: true },
            meta: [
                { charset: 'utf-8' },
                { name: 'description', content: 'Micheal Adisa - Highly skilled with web performance, accessibility & UI Engineering. Approach engineering with usability and user experience as core building block.' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' }
            ]
        })
    },
    data() {
        return {
            portfolio: json
        }
    },
    mounted() {
        type home = {
            [key: string]: any; // 👈️ variable keys
        };
        this.$watch(
            () => {
                if(typeof this.$refs.home === 'object') {
                ((this.$refs.home as home).showNav)
                if ((this.$refs.home as home).showNav === true  && (this.$refs.home as home).clientWidth <= 968 ) {
                    const homeContainer = document.querySelector('.body');
                    (homeContainer as HTMLElement).style.position = "fixed"
                } else {
                    const homeContainer = document.querySelector('.body');
                    (homeContainer as HTMLElement).style.position = "initial"
                }
                }
            },
            (val: any) => {
                return val
            }
        )
    },
})
</script>


<style lang="scss" scoped>
.portfolio {
    &__heading {
        max-width: 1270px;
        margin: auto;
        padding: 0 25px;
        h1 {
            font-size: 48px;
            max-width: 440px;
            @media screen and (max-width: 969px) {
                font-size: 36px;
            }

        }
    }
    &__container {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 100px;
        margin: 50px 0;
        @media screen and (max-width: 969px) {
            grid-template-columns: 1fr;
            gap: 50px;
        }
        &--work {
            img {
                width: 100%;
                border-radius: 20px;
            }
            p {
                font-size: 16px;
                line-height: 24px;
                margin: 20px 0;
            }
            a {
                font-size: 16px;
                line-height: 24px;
                color: $primary;
                text-decoration: none;
                transition: all 0.3s ease-in-out;
                margin-top: 20px;
                &:hover {
                    color: $primary;
                }
            }
        }
    }
}
</style>