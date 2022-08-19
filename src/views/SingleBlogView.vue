<template>
    <div class="body">
        <Header ref="home"/>
        <div v-if="singleBlog" class="single-blog">
            <h1>{{ singleBlog.title }}</h1>
            <p class="single-post__date">{{ formatDate(singleBlog.dateAdded )}}</p>
            <div class="single-post__image">
                <img :src="singleBlog.coverImage" alt="article cover image">
            </div>
            <div class="single-post__content" v-html="markdownParser(singleBlog.contentMarkdown)"></div>

            <div class="single-blog__navigation">
                <button
                    aria-label="previous"
                    @click="switchArticle('previous')"
                    :disabled="blogIndex === 0 || blogIndex === 1">Previous</button>
                <button
                    aria-label="Next"
                    @click="switchArticle('next')"
                    :disabled="posts.length === blogIndex">Next</button>
            </div>
        </div>
        <Footer />
    </div>
</template>

<script lang="ts">
/* eslint-disable */
import { defineComponent } from 'vue';
import { useMeta } from 'vue-meta'
import json from '../data/data.json'
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';

type singleBlog = {
  [key: string]: any; // 👈️ variable key
};

export default defineComponent({
    components: { Header, Footer },
    setup () {
        useMeta({
            title: 'Micheal Adisa - Blog',
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
            posts: json,
            singleBlog: {} as singleBlog,
            blogIndex: 0
        };
    },
    watch: { 
        '$route.params.id': {
            handler: function(val) {
                const findArticleIndex = this.posts.findIndex(post => post.slug === val);
                this.blogIndex = findArticleIndex + 1;
                const singlePost = this.posts.find(post => post.slug === val);
                this.singleBlog = singlePost!
            },
            deep: true,
            immediate: true
        }
    },
    mounted() {
        const singlePost = this.posts.find(post => post.slug === this.$route.params.id);
        this.singleBlog = singlePost!
        
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
    methods: {
        formatDate(val: string) {
            const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
            const date = new Date(val)
            return date.toLocaleDateString("en-US", options as object)
        },
        markdownParser(text: string) {
            const toHTML = text && text
                .replace(/^#### (.*$)/gim, '<h2 class="mt-20">$1</h2>') // h3 tag
                .replace(/^### (.*$)/gim, '<h3 class="mt-20">$1</h3>') // h3 tag
                .replace(/^## (.*$)/gim, '<h2>$1</h2>') // h2 tag
                .replace(/^# (.*$)/gim, '<h1>$1</h1>') // h1 tag
                .replace(/```\s*([^]+?.*?[^]+?[^]+?)```/g, '<pre class="background"><code>$1</code></pre>') // pre tag
                .replace(/\*\*(.*)\*\*/gim, '<b>$1</b>') // bold text
                .replace(/\*(.*)\*/gim, '<i>$1</i>') // italic text
            return toHTML && toHTML.trim(); // using trim method to remove whitespace
        },
        switchArticle(val: string) {
            const currentPost = this.posts.find(post => post.slug === this.$route.params.id);
            const currentPostIndex = this.posts.indexOf(currentPost!);
            const nextPost = this.posts[currentPostIndex + 1];
            const previousPost = this.posts[currentPostIndex - 1];
            if (val === 'next' && nextPost) {
                this.$router.push(`/blog/${nextPost.slug}`);
            } else if (val === 'previous' && previousPost) {
                this.$router.push(`/blog/${previousPost.slug}`);
            }
        }
    }
})
</script>

<style lang="scss" scoped>
.single-blog {
    max-width: 800px;
    margin: 100px auto;
    @media screen and (max-width: 801px) {
        padding: 0 3em;
        margin: 0 0 100px 0;
    }
    h1 {
        margin: 20px 0;
    }
    .single-post__image {
        width: 100%;
        height: auto;
        margin: 30px 0;
        img {
            width: 100%;
            height: auto;
        }
    }
    .single-post__content {
        margin-bottom: 20px;
        line-height: 32px;
    }
    &__navigation {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 100px;
        padding: 100px 20px;
        @media screen and (max-width: 696px) {
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 20px;
            padding: 20px;
        }
        button {
            background: transparent;
            border: 1px solid $primary;
            padding: 10px;
            min-width: 200px;
            cursor: pointer;
            transition: all 0.3s ease-in-out;
        }
        button:hover {
            background: $primary;
            border: 1px solid $primary;
            color: #fff;
        }
        button[disabled],
        button[disabled]:hover,
        button:disabled {
            background: transparent;
            border: 1px solid transparent;
            color: grey;
            cursor: not-allowed;
        }
    }
}
</style>