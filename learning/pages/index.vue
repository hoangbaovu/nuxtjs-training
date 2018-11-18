<template>
  <div>
    <h1>Hello World</h1>

    <input type="text" v-model="id">
    <button @click="loadUser">load User</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: ''
    }
  },
  methods: {
    loadUser() {
      this.$router.push(`/users/${this.id}`);
    }
  }
}
</script>
