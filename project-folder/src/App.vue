<template>
    <v-app class="app" >
        <v-content>
            <router-view :key="$route.fullPath"/>
        </v-content>
    </v-app>
</template>

<script>

    export default {
        name: 'App',
        data: () => ({
        }),
    };
</script>

<style>

</style>