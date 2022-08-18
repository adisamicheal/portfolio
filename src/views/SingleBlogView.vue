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
        </div>
        <Footer />
    </div>
</template>

<script lang="ts">
/* eslint-disable */
import { defineComponent } from 'vue';
import json from '../data/data.json'
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';

type singleBlog = {
  [key: string]: any; // 👈️ variable key
};

export default defineComponent({
    components: { Header, Footer },
    data() {
        return {
            posts: json,
            singleBlog: {} as singleBlog
        };
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
}
</style>