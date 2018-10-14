<template>
    <h1>A single user, with ID: {{ $route.params.id }}</h1>
</template>

<script>
export default {
    validate (data) {
        let regexNumber = /^\d+$/;
        return regexNumber.test(data.params.id);
    }
}
</script>

