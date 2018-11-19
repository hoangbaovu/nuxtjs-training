<template>
  <div>
    <h2>Making API request - The Vue way</h2>

    <div class="row">
      <Card class="col-md-4 mx-1 my-1"
        v-for="post in posts"
        :key="post.id"
        :post="post"
        />
      <button class="btn btn-primary" v-scroll-to="'body'">Back to Top</button>
    </div>


  </div>
</template>

<script>
import axios from 'axios'
import Card from '@/components/Card'

import {mapGetters} from 'vuex'

export default {
  components: {
    Card
  },
  data() {
    return {
      allPosts: ''
    }
  },
  computed: {
    ...mapGetters(['posts'])

    // allPosts() {
    //   return this.$store.getters.posts
    // }
  },
  async fetch({store}) {
    let {data} = await axios.get('https://jsonplaceholder.typicode.com/posts')
    // return { allPosts: data }
    store.dispatch('setPosts', data)
  },
  // async asyncData({store}) {
  //   let {data} = await axios.get('https://jsonplaceholder.typicode.com/posts')
  //   // return { allPosts: data }
  //   store.dispatch('setPosts', data)
  // },
  head: {
    title: 'List of Posts'
  }
}
</script>


<!--
<script>
import axios from 'axios'

export default {
  data() {
    return {
      posts: []
    }
  },

  mounted() {
    axios.get('https://jsonplaceholder.typicode.com/todos')
      .then(response => {
        console.log(response);
        this.posts = response.data;
      })
      .catch(error => {
        console.log(error);
      })
  }
}
</script>
-->
