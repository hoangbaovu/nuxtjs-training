<template>
  <div class="container mt-5 col-md-6">
    <h2>Register</h2><br>
    <form @submit.prevent="submit">
      <div class="form-group">
        <label>Full Name</label>
        <input
        v-model.trim="form.name"
        type="text" class="form-control" placeholder="Full Name">
        <small class="form-text text-danger">Show errors here</small>
      </div>
      <div class="form-group">
        <label>Email address</label>
        <input
        v-model.trim="form.email"
        type="email" class="form-control" placeholder="Enter email">
        <small class="form-text text-danger">Show errors here</small>
      </div>
      <div class="form-group">
        <label >Password</label>
        <input
        v-model.trim="form.password"
        type="password" class="form-control" placeholder="Password">
        <small class="form-text text-danger">Show errors here</small>
      </div>
      <button type="submit" class="btn btn-primary">Register</button>
    </form>
    <br>
    <p>Already have an account? <nuxt-link to="/login">Login</nuxt-link></p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: '',
        email: '',
        password: ''
      }
    }
  },
  methods: {
    async submit() {
      await this.$axios.$post('register', this.form)
      await this.$auth.loginWith("local", {
        data: {
          email: this.form.email,
          password: this.form.password
        }
      })

      this.$router.push('/');
    }
  }
}
</script>

<style>

</style>
