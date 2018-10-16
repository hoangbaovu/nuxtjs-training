<template>
    <div>
        <Header/>
        <header>
            <h2>User Section</h2>
            <p>User</p>
        </header>
        <nuxt/>
    </div>
</template>

<style scoped>

</style>

<script>
import Header from '~/components/Header.vue'
import Logo from '~/components/Logo.vue'

export default {
    components: {
        Header,
        Logo
    },
}
</script>

