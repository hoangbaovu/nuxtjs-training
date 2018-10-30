<template>
  <div class="admin-post-page">
    <section class="update-form">
      <AdminPostForm :post="loadedPost" @submit="onSubmitted" />
    </section>
  </div>
</template>

<script>
import AdminPostForm from '@/components/Admin/AdminPostForm'

export default {
    layout: 'admin',
    components: {
        AdminPostForm
    },
    asyncData(context) {
      return axios
        .get(
          'https://nuxt-blog-a4685.firebaseio.com/posts' +
          context.params.postId +
          '.json'
        )
        .then(res => {
          return {
            loadedPost: res.data
          }
        })
        .catch(e => context.error());
    },
    methods: {
      onSubmiited(editedPost) {
        axios
          .put(
            'https://nuxt-blog-a4685.firebaseio.com/posts' +
            this.$route.params.postId +
            '.json', editedPost
          )
          .then(res => {
            return this.$route.push('admin');
          })
          .catch(e => console.log(e));
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
