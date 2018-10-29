import Vuex from 'vuex';
import axios from 'axios';

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPosts: []
    },
    mutations: {
      setPosts(state, posts) {
        state.loadedPost = posts;
      }
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
        return axios.get('https://nuxt-blog-a4685.firebaseio.com/posts.json')
          .then(res => {
            const postArray = []
            for (const key in res.data) {
              postArray.push({ ...res.data[key], id:key });
            }
            vuexContext.commit('setPosts', postArray)
          })
          .catch(e => context.error(e));
      }
    },
    getters: {
      loadedPosts(state) {
        return state.loadedPosts
      }
    }
  })
}

export default createStore