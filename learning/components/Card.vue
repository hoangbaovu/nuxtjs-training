<template>
  <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">{{ post.title }} - {{ post.id }}</h5>
      <p class="card-text">{{ post.body }}</p>
    </div>
    <div class="card-body">
      <a href="#" class="card-link">Card link</a>
      <a href="#" class="card-link">Another link</a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    post: Object
  }
}
</script>

