<template>
    <div class="body">
        <Header class="navbar" ref="home"/>
        <div class="container">
            <h1>Recent Writings</h1>
            <ol class="blog-container" aria-label="articles">
                <ul class="article-container" v-for="(article, index) in posts" :key="index">
                    <article aria-label="post">
                        <router-link :to="`blog/${article.slug}`">
                            <h2 class="header">{{ article.title }}</h2>
                            <p class="date">{{ formatDate(article.dateAdded) }}</p>
                            <p class="content">{{ article.brief }}</p>
                        </router-link>
                    </article>
                </ul>
            </ol>
        </div>
        <Footer />
    </div>
</template>

<script lang="ts">
/* eslint-disable */

import json from '../data/data.json'
import { defineComponent } from 'vue';
import { useMeta } from 'vue-meta'
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';

export default defineComponent({
    setup () {
        useMeta({
            title: 'Micheal Adisa - Blog',
            htmlAttrs: { lang: 'en', amp: true }
        })
    },
    data() {
        return {
            posts: json
        };
    },
    components: { Header, Footer },
    mounted() {
        type home = {
            [key: string]: any; // 👈️ variable keys
        };
        this.$watch(
            () => {
                if(typeof this.$refs.home === 'object') {
                ((this.$refs.home as home).showNav)
                if ((this.$refs.home as home).showNav === true) {
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
    methods: {
        formatDate(val: string) {
            const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
            const date = new Date(val)
            return date.toLocaleDateString("en-US", options as object)
        }
    }
})
</script>

<style scoped lang="scss">
.container {
    max-width: 800px;
    margin: 100px auto;
    @media screen and (max-width: 801px) {
        padding: 0 3em;
        margin: 0 0 100px 0;
    }
    h1 {
        text-align: left;
        padding: 30px 0;
        margin-bottom: 50px;
    }
    h1::after {
        content: "";
        display: block;
        width: 100%;
        border-bottom: 3px solid $secondary;
        margin-top: 20px;
        width: 30px;
    }
    .blog-container {
        .article-container {
            margin-bottom: 30px;
            border-bottom: 2px solid transparent;
            a {
                text-decoration: none;
                color: rgb(47, 46, 46);
            }
            h2 {
                font-size: 24px;
            }
            p {
                font-size: 18px;
                line-height: 36px;
                margin: 15px 0;
            }
        }
        .article-container:hover {
            border-bottom: 2px solid $primary;
            transition: .5s;
        }
    }
}
</style>