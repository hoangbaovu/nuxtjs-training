<template>
  <div class="container">
    <h2>Latest Topics</h2>
    <div v-for="(topic, index) in topics" :key="index" class="bg-light mt-5 mb-5">
      <nuxt-link :to="{name: 'topics-id', params: {id: topic.id}}">{{topic.title}}</nuxt-link>
      <p class="text-muted">{{ topic.created_at }} by {{ topic.user.name }}</p>

      <div v-for="(content, index) in topic.posts" :key="index" class="ml-5 content">
        {{ content.body }}
      </div>
    </div>

    <nav aria-label="...">
      <ul class="pagination">
        <li v-for="(key, value) in links" :key="value" class="page-item">
          <a @click="loadMore(key)" href="#" class="page-link">{{value}}</a>
        </li>
        <!-- <li class="page-item disabled">
          <a class="page-link" href="#" tabindex="-1">Previous</a>
        </li>
        <li class="page-item"><a class="page-link" href="#">1</a></li>
        <li class="page-item active">
          <a class="page-link" href="#">2 <span class="sr-only">(current)</span></a>
        </li>
        <li class="page-item"><a class="page-link" href="#">3</a></li>
        <li class="page-item">
          <a class="page-link" href="#">Next</a>
        </li> -->
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      topics: [],
      links: []
    }
  },
  async asyncData({$axios}) {
    let {data, links} = await $axios.$get('/topics');
    console.log(links);
    return {
      topics: data,
      links
    }
  },
  methods: {
    async loadMore(key) {
      let {data} = await this.$axios.$get(key);
      return this.topics = {...this.topics, ...data};
    }
  }
}
</script>

<style>

</style>
