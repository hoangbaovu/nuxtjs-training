<template>
  <div class="post-list">
    <PostPreview
      id="1"
      :is-admin="isAdmin"
      title="50 project open-source Javascript"
      previewText="VuePress là một trình tạo site tĩnh tối giản với hệ thống Vue-powered theming"
      thumbnail="https://images.viblo.asia/166bfddd-c9d9-4dc6-ac92-b5deb3d751c1.png" />
    <PostPreview
      id="2"
      :is-admin="isAdmin"
      title="50 project open-source Javascript"
      previewText="VuePress là một trình tạo site tĩnh tối giản với hệ thống Vue-powered theming"
      thumbnail="https://images.viblo.asia/166bfddd-c9d9-4dc6-ac92-b5deb3d751c1.png" />
    <PostPreview
      id="3"
      :is-admin="isAdmin"
      title="50 project open-source Javascript"
      previewText="VuePress là một trình tạo site tĩnh tối giản với hệ thống Vue-powered theming"
      thumbnail="https://images.viblo.asia/166bfddd-c9d9-4dc6-ac92-b5deb3d751c1.png" />
  </div>
</template>

<script>
import PostPreview from '@/components/Posts/PostPreview'

export default {
  components: {
    PostPreview
  },
  props: {
    isAdmin: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
  .post-list {
    display: flex;
    padding: 20px;
    box-sizing: border-box;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
</style>
