<template>
  <div>
    <h2>Making API request - The Vue way</h2>

    <h3 v-for="post in posts" v-bind:key="post.id">{{ post.title}}</h3>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      posts: ''
    }
  },
  async asyncData() {
    let {data} = await axios.get('https://jsonplaceholder.typicode.com/todos')
    return { posts: data }
  },
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
