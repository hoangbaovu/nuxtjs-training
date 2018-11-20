<template>
  <div>
    <h1>Hello World</h1>

    <no-ssr>
    <v-select v-model="selected" placeholder="Select Category" :options="['foo', 'bar']"></v-select>
    </no-ssr>
    <input type="text" v-model="id">
    <button @click="loadUser">load User</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: '',
      selected: ''
    }
  },
  methods: {
    loadUser() {
      this.$router.push(`/users/${this.id}`);
    }
  }
}
</script>
