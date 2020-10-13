<template>
    <v-parallax wrap id="#contacts" src='../assets/back_4.png' height="100%" grid-list-xl>
            <v-layout row align-start justify-center class="text-center text-md-left my-8 mx-0">
                <v-flex sm12 md3>
                    <p class="subtitle-1 text-uppercase mb-4 font-weight-bold">Our status</p>
                    <p>Currently working remote. We love to brainstrom, have good conversations and discuss
                        new ideas. Feel free to get in touch. </p>
                </v-flex>
                <v-flex xs6 sm4 md2 offset-md-1>
                    <p class="subtitle-1 text-uppercase mb-4 font-weight-bold">About</p>
                    <p><a href="#!" style="color: inherit; text-decoration: none">Work with us</a></p>
                    <p><a href="#!" style="color: inherit; text-decoration: none">Join the team</a></p>
                    <p><a href="#!" style="color: inherit; text-decoration: none">Read our blog</a></p>
                </v-flex>
                <v-flex xs6 sm4 md2 offset-md-1>
                    <p class="subtitle-1 text-uppercase mb-4 font-weight-bold">Office</p>
                    <p>Rua da Prata, 80<br>1100-420 Lisboa<br>Portugal</p>
                </v-flex>
                <v-flex xs12 sm4 md2 offset-md-1>
                    <p class="subtitle-1 text-uppercase mb-4 font-weight-bold">Contact</p>
                    <p>info@thorly.co</p>
                    <p>+ 351 918 548 827</p>
                    <p>
                        <v-btn class="white--text mr-1" icon><v-icon size="24px">mdi-linkedin</v-icon></v-btn>
                        <v-btn class="white--text mr-1" icon><v-icon size="24px">mdi-instagram</v-icon></v-btn>
                        <v-btn class="white--text mr-1" icon><v-icon size="24px">mdi-facebook</v-icon></v-btn>
                    </p>
                </v-flex>
            </v-layout>
        <hr />
        <v-row class="justify-center">
            <v-btn color="white" text class="text-center my-2">THORLY &copy; 2020 - Privacy policy</v-btn>
        </v-row>
    </v-parallax>
</template>

<script>
    export default {
        name: "Footer"
    }
</script>

<style scoped>

</style>