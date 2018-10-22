<template>
  <div class="posts-page">
    <PostList :posts="loadedPosts" />
  </div>
</template>

<script>
import PostList from '@/components/Posts/PostList'

export default {
  components: {
    PostList
  },
  asyncData(context) {
    return new Promise((resolve, reject)=> {
      setTimeout(() => {
       resolve( {
          loadedPosts: {
            id: '1',
            title: "First Post",
            previewText: 'This is a....',
            thumbnail: 'https://images.viblo.asia/166bfddd-c9d9-4dc6-ac92-b5deb3d751c1.png'
          },
        });
      },1500)
      // reject(new Error())
    })
    .then(data => {
      return data
    })
    .catch(e =>{
      context.error(e)
    });
  },
  created() {
    this.$store.dispatch('setPosts', this.loadedPosts)
  }
}
</script>

<style scoped>
  .posts-page {
      display: flex;
      justify-content: center;
      align-content: center;
  }
</style>

