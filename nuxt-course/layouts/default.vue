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
</style>
