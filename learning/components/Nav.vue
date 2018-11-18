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
            <nuxt-link to="/users" class="nav-link">Users</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link to="/posts" class="nav-link">Posts</nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
