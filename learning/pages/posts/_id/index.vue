<template>
  <div class="">
    <h2>{{ post.title }}</h2>
    <p>{{ post.body }}</p>
    <nuxt-link to="/posts">Back to posts</nuxt-link>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      post: ''
    }
  },
  async asyncData({params}) {
    let {data} = await axios.get(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
    return { post: data }
  },
  // async asyncData(context) {
  //   let {data} = await axios.get(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)
  //   return { post: data }
  // },
  head() {
    return {
      title: this.post.title
    }
  }
}
</script>

