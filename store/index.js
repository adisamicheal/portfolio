
import Vue from 'vue'
import Vuex from 'vuex'
import gql from 'graphql-tag'


Vue.use(Vuex)


export default () => new Vuex.Store({
  state: {
    publications: ''
  },
  getters: {
    getPublications: state => state.publications,
  },
  mutations: {
    setPublications: (state, data) => { state.publications = data },
  },
  actions: {
    fetchPublications({ commit }) {
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
                            coverImage
                        }
                    }
                }
            }
        `;
        this.app.apolloProvider.defaultClient
        .mutate({
          mutation: GET_USER_ARTICLES,
          variables: {
            page: 0
          }})
        .then(res =>
            commit("setPublications", res.data.user.publication.posts)
        ).catch(err => {
            return err
        })
    },
  },
})