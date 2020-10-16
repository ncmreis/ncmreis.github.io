<template>
    <v-card>
        <v-img v-if="Header" max-height="150" contain :src="getWayImgUrl(avatar)"></v-img>
        <v-card-title v-if="Header" v-bind:style="{ color: color }" class="headline justify-center">
            {{ title }}
        </v-card-title>
        <v-divider v-if="Header"></v-divider>
        <v-list disabled class="text-left">
            <v-list-item-group>
                <v-list-item v-for="item in items" class="align-center" row>
                    <v-list-item-icon class="my-0 align-center">
                        <v-icon v-bind:style="{ color: color }" v-text="item.icon" class="py-3"></v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title v-text="item.text" class="body-2"></v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list-item-group>
        </v-list>
    </v-card>
</template>

<script>
    export default {
        name: "featureServiceCard",
        props: ['avatar', 'title', 'color', 'items', 'Header'],
        methods: {
            getWayImgUrl(pet) {
                var images = require.context('../assets/', false, /\.png$/)
                return images('./' + pet + ".png")
            }
        }
    }
</script>

<style scoped>



</style>