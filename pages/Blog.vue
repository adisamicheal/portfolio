<template>
    <div>
        <div v-if="!publicationsData.length"
            class="laoding-state blog__page"
        >
            Fetching Blog Content ...
        </div>
        <div v-else class="blog__page">
            <h1>Featured Articles</h1>
            <a
                class="hashnode-link"
                href="https://michellead.hashnode.dev"
                target="_blank"
                rel="noopener noreferrer">
                    View more on hashnode
            </a>
            <div>
                <div class="blog_container" v-for="(article, index) in publicationsData" :key="index">
                <a :href="`https://michellead.hashnode.dev/${article.slug}`" target="_blank" rel="noopener noreferrer">
                    <h2 class="header">{{ article.title }}</h2>
                    <p class="date">{{ formatDate(article.dateAdded) }}</p>
                    <p class="content">{{ article.brief }}</p>
                </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import gql from 'graphql-tag'

const GET_USER_ARTICLES = gql`
    query GetUserArticles($page: Int!) {
        user(username: "michellead") {
            publication {
                posts(page: $page) {
                    title
                    brief
                    slug
                    dateAdded
                    contentMarkdown
                }
            }
        }
    }
`;

export default {
    data() {
        return {
            loading: false,
            // Initialize your apollo data
            publicationsData: '',
        }
    },
    mounted() {
        this.loading = true
        
        this.$apollo
        .mutate({
          mutation: GET_USER_ARTICLES,
          variables: {
            page: 0
          }})
        .then((res) =>
            // console.log(res.data.user.publication.posts),
            this.publicationsData = res.data.user.publication.posts,
            this.loading = false
        )
    },
    methods: {
        formatDate(val) {
            const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
            const date = new Date(val)

            return date.toLocaleDateString("en-US", options)
        }
    }
}
</script>

<style scoped>
.blog__page {
    max-width: 660px;
    margin: 20px auto;
    padding: 20px 10px;
}
.blog__page h1 {
    font-size: 24px;
}
.blog__page h1::after {
    background-color: #3EB37F;
    bottom: -10px;
    height: 3px;
    border: 20px;
    width: 40px;
    position: relative;
    content: "";
    display: block;
}
.hashnode-link {
    margin-top: 20px;
    text-decoration: underline;
}
.blog_container {
    border-bottom: 3px solid #dffff1;
    cursor: pointer;
    margin: 20px 0;
    padding: 20px 0;
}
.blog_container:hover {
    border-bottom: 3px solid #3EB37F;
    transition: .5s;
}
.header {
    font-size: 24px;
    font-weight: 600;
}

.date {
    font-size: 18px;
    margin: 10px 0;
    color: gray;

}

.content {
    font-size: 20px;
    color: #000;
}
</style>