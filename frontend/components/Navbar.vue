<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
      <nuxt-link to="/" class="navbar-brand">Neo</nuxt-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <nuxt-link to="/" class="nav-link">Home</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link to="/topics" class="nav-link">Topics</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link to="/dashboard" class="nav-link">Create</nuxt-link>
          </li>
        </ul>

        <template v-if="!authenticated">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <nuxt-link to="/login" class="nav-link">Login</nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link to="/register" class="nav-link">Register</nuxt-link>
            </li>
          </ul>
        </template>

        <template v-if="authenticated">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <nuxt-link to="/" class="nav-link">{{ user.name }}</nuxt-link>
            </li>
            <li class="nav-item">
              <a @click.prevent="logout" class="nav-link">Logout</a>
            </li>
          </ul>
        </template>
      </div>
    </div>
    {{ authenticated }}
  </nav>
</template>

<script>

export default {
  methods: {
    logout() {
      this.$auth.logout()
    }
  }
}
</script>
