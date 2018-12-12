<template>
  <div class="container mt-5 col-md-6">
    <h2>Create a new topic</h2><br>
    <form @submit.prevent="create">
      <div class="form-group">
        <label>Topic title</label>
        <input
        v-model="form.title"
        type="title" class="form-control" placeholder="Title" autofocus>
        <small class="form-text text-danger" v-if="errors.title">{{ errors.title[0] }}</small>
      </div>
      <div class="form-group">
        <label>Topic body</label>
        <textarea v-model="form.body" class="form-control" rows="5"></textarea>
        <small class="form-text text-danger" v-if="errors.body">{{ errors.body[0] }}</small>
      </div>
      <button type="submit" class="btn btn-primary">Create</button>
    </form>
  </div>
</template>

<script>
export default {
  middleware: ['auth'],
  data() {
    return {
      form: {
        title: '',
        body: ''
      }
    }
  },
  methods: {
    async create() {
      await this.$axios.$post('/topics', this.form);
      this.$router.push('/');
    }
  }
}
</script>

<style>

</style>
