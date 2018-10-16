<template>
    <header class="header">
        <Logo/>
        <ul class="nav-items">
            <li>
                <nuxt-link to="/">Home</nuxt-link>
            </li>
            <li>
                <nuxt-link to="/users">Users</nuxt-link>
            </li>
        </ul>
    </header>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
    components: {
        Logo
    },
}
</script>

<style scoped>
    .header {
        background: #222;
        display: flex;
        justify-content: center;
        align-content: center;
        height: 60px;
        margin-bottom: 60px;
    }

    .nav-items {
        list-style: none;
        padding: 0;
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 100%;
    }

    .nav-items li {
        width: 100px;
    }
    
    .nav-items a {
        color: #fff;
        text-decoration: none;
        transition: .3s all;
    }

    .nav-items a:hover,
    .nav-items a:active {
        color: #d35400;
    }
</style>
