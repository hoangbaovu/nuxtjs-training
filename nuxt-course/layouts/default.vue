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

<style scoped>
  html {
    padding: 0;
  }

  body {
    margin: 0 !important;
  }
</style>
