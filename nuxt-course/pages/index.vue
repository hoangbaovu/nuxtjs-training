<template>
  <div class="home-page">
    <div class="container">
      <section class="intro">
        <h1>Get the latest tech news!</h1>
      </section>
      <section class="featured-posts">
        <PostPreview
          id="1"
          title="50 project open-source Javascript"
          previewText="VuePress là một trình tạo site tĩnh tối giản với hệ thống Vue-powered theming"
          thumbnail="https://images.viblo.asia/166bfddd-c9d9-4dc6-ac92-b5deb3d751c1.png" />
        <PostPreview
          id="1"
          title="50 project open-source Javascript"
          previewText="VuePress là một trình tạo site tĩnh tối giản với hệ thống Vue-powered theming"
          thumbnail="https://images.viblo.asia/166bfddd-c9d9-4dc6-ac92-b5deb3d751c1.png" />
        <PostPreview
          id="1"
          title="50 project open-source Javascript"
          previewText="VuePress là một trình tạo site tĩnh tối giản với hệ thống Vue-powered theming"
          thumbnail="https://images.viblo.asia/166bfddd-c9d9-4dc6-ac92-b5deb3d751c1.png" />
      </section>
    </div>
  </div>
</template>

<script>
import PostPreview from '@/components/Posts/PostPreview'

export default {
  components: {
    PostPreview
  }
}
</script>

<style scoped>
.intro {
  height: 300px;
  position: relative;
  padding: 30px;
  box-sizing: border-box;
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

.featured-posts {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>
