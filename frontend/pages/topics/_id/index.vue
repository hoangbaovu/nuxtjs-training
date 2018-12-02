<template>
  <div class="container">
    <h2>Singe Post</h2>
    <div class="bg-light mt-5 mb-5">
      <h3>{{topic.title}}</h3>
      <p class="text-muted">{{ topic.created_at }} by {{ topic.user.name }}</p>

      <div v-for="(content, index) in topic.posts" :key="index" class="ml-5 content">
        {{ content.body }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      topic: ''
    }
  },
  async asyncData({$axios, params}) {
    let {data} = await $axios.$get(`/topics/${params.id}`);
    return {
      topic: data
    }
  }
}
</script>

<style>

</style>
