<template>
  <div class="container">
    <h2>Latest Topics</h2>
    <div v-for="(topic, index) in topics" :key="index" class="bg-light mt-5 mb-5">
      <h3>{{ topic.title }}</h3>
      <p class="text-muted">{{ topic.created_at }} by {{ topic.user.name }}</p>

      <div v-for="(content, index) in topic.posts" :key="index" class="ml-5 content">
        {{ content.body }}
      </div>
    </div>
    <pre>
      {{ topics }}
    </pre>
  </div>
</template>

<script>
export default {
  data() {
    return {
      topics: []
    }
  },
  async asyncData({$axios}) {
    let {data} = await $axios.$get('/topics');
    // console.log(data);
    return {
      topics: data
    }
  }
}
</script>

<style>

</style>
