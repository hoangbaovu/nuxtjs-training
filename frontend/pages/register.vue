<template>
  <div class="container mt-5 col-md-6">
    <h2>Register</h2><br>
    <form>
      <div class="form-group">
        <label>Full Name</label>
        <input type="text" class="form-control" placeholder="Full Name">
        <small class="form-text text-danger">Show errors here</small>
      </div>
      <div class="form-group">
        <label>Email address</label>
        <input type="email" class="form-control" placeholder="Enter email">
        <small class="form-text text-danger">Show errors here</small>
      </div>
      <div class="form-group">
        <label >Password</label>
        <input type="password" class="form-control" placeholder="Password">
        <small class="form-text text-danger">Show errors here</small>
      </div>
      <button type="submit" class="btn btn-primary">Login</button>
    </form>
    <br>
    <p>Don't have an account? <nuxt-link to="/register">Register</nuxt-link></p>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
