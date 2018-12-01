<template>
  <div class="container">
    <h2>Latest Topics</h2>
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
