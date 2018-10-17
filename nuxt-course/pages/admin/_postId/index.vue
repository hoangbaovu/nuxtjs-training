<template>
  <div class="admin-post-page">
    <section class="update-form">
      <AdminPostForm :post="loadedPost" />
    </section>
  </div>
</template>

<script>
import AdminPostForm from '@/components/Admin/AdminPostForm'

export default {
    components: {
        AdminPostForm
    },
    data() {
        return {
            loadedPost: {
                author: 'Neo',
                title: 'My awesome Post',
                content: 'Amazing post',
                thumbnaiLink: 'https://images.viblo.asia/166bfddd-c9d9-4dc6-ac92-b5deb3d751c1.png'
            }
        }
    }
}
</script>

<style scoped>
.admin-post-page {
  margin: 0 auto;
  width: 1200px;
}
</style>
