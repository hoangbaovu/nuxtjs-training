import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPosts: []
    },
    mutations: {
      setPosts(state, posts) {
        state.loadedPost = posts
      }
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
        if (! process.client) {
          console.log(contex.req.session);
        }
        return new Promise((resolve, reject)=> {
          setTimeout(() => {
            vuexContext.commit('setPosts',  [
              {
                id: '1',
                title: "First Post",
                previewText: 'This is a....',
                thumbnail: 'https://images.viblo.asia/166bfddd-c9d9-4dc6-ac92-b5deb3d751c1.png'
              }
            ])
           resolve();
          },1500);
        });
      },
      setPosts(vuexContext, posts) {
        vuexContext.commit('setPosts', posts)
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