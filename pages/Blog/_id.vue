<template>
  <div class="single-post">
    <h1>{{ singleBlog.title }}</h1>
    <p class="single-post__date">{{ formatDate(singleBlog.dateAdded )}}</p>
    <div class="single-post__image">
        <img :src="singleBlog.coverImage" alt="article cover image">
    </div>
    <div class="single-post__content" v-html="markdownParser(singleBlog.contentMarkdown)"></div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: 'SingleBlog',
    mounted() {
        const objectLength = Object.keys(this.getPublications).length
        if (objectLength <= 0) {
            this.$router.push('/blog')
        }
    },
    computed: {
        ...mapGetters(['getPublications']),
        singleBlog() {
            return this.getPublications
                && this.getPublications.find(blog => 
                    blog.slug === this.$route.params.id)
            ;
        }
    },
    methods: {
        formatDate(val) {
            const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
            const date = new Date(val)

            return date.toLocaleDateString("en-US", options)
        },
        markdownParser(text) {
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
}
</script>

<style lang="scss" scoped>
.single-post {
    max-width: 660px;
    margin: auto;
    padding: 20px;
    &__date {
        color: grey;
    }
    &__image {
        border: 1px solid #3EB37F;
        padding: 10px;
        margin: 30px 0;
        img {
            width: 100%;
        }
    }
    &__content {
        margin-bottom: 50px;
    }
}
    </style>
<style>
pre { 
    background-color: #1d1f20 !important;
    padding: 20px;
    color:#ddca7e;
    margin: 10px 0;
    overflow: scroll;
}
</style>