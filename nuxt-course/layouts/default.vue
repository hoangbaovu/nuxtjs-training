<template>
  <div>
    <Header/>
    <nuxt/>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Logo from '@/components/Logo'

export default {
    components: {
        Header,
        Logo
    },
}
</script>

<style>
  html {
    font-family: 'Open Sans', sans-serif;
  }

  .container {
    min-width: 1200px;
    padding: 0;
    margin: 0;
  }
</style>
