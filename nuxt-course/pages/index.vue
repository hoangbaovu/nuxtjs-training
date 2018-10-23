<template>
  <div class="home-page">
    <section class="intro">
      <div class="container">
        <h1>Get the latest tech news!</h1>
      </div>
    </section>
    <div class="container">
      <PostList :posts="loadedPosts" />
    </div>
  </div>
</template>

<script>
import PostList from '@/components/Posts/PostList'

export default {
  components: {
    PostList
  },
  computed: {
    loadedPosts() {
      return this.$store.getters.loadedPosts
    }
  }
  // asyncData(context, callback) {
  //   console.log('asynData is executed!');
  //   console.log(context);
  //   setTimeout(() => {
  //     callback(null, {
  //       loadedPosts: [
  //           {
  //             id: '1',
  //             title: 'First Post',
  //             previewText: 'This is a....',
  //             thumbnail: 'https://images.viblo.asia/166bfddd-c9d9-4dc6-ac92-b5deb3d751c1.png'
  //           },
  //           {
  //             id: '2',
  //             title: 'Second Post',
  //             previewText: 'This is a....',
  //             thumbnail: 'https://images.viblo.asia/166bfddd-c9d9-4dc6-ac92-b5deb3d751c1.png'
  //           },
  //           {
  //             id: '3',
  //             title: 'Three Post',
  //             previewText: 'This is a....',
  //             thumbnail: 'https://images.viblo.asia/166bfddd-c9d9-4dc6-ac92-b5deb3d751c1.png'
  //           }
  //         ]
  //     });
  //   }, 1500)
  // },
}
</script>

<style scoped>
.intro {
  height: 300px;
  position: relative;
  padding: 30px;
  box-sizing: border-box;
  background: url('~assets/images/main-page-background.jpg');
  background-position: center;
  background-size: cover;
}

.intro h1 {
  position: absolute;
  top: 10%;
  left: 5%;
  width: 90%;
  font-size: 1.5rem;
  color: black;
  padding: 10px;
  box-sizing: border-box;
  border: 1px solid black;
}

@media (min-width: 768px) {
  .intro h1 {
    font-size: 2rem;
  }
}
</style>
