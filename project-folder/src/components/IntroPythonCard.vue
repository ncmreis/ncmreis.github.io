<template>
    <v-card v-show="show1" class="transparent ml-3 mr-3">
        <v-card-text class="text-center">
            <v-icon x-large class="orange--text text--lighten-2">mdi-code-tags</v-icon>
        </v-card-text>
        <v-stepper class="elevation-0" v-model="e6" vertical>

            <v-stepper-step :complete="e6 > 1" step="1" editable >
                Main Goal
            </v-stepper-step>
            <v-stepper-content step="1">
                <v-card color="grey lighten-4" class="mb-2">
                    <v-card-text class="text-justify">
                        You will not go from zero to hero with this course and we have no intention to fool you with
                        that. This course should teach you tools and the building blocks of Python. The program was
                        thought having into account the following deliverables: <br><br>
                        1. Be able to do simple and local automations; <br>
                        2. Have the basic ground to move faster into areas that are Python-dependent, e.g: Machine
                        Learning, Deploying ML models into production, Data Analysis, etc.; <br>
                        3. Teach you how to leverage your solutions by using open-source libraries and giving
                        you hands-on experience on APIs, like Pandas, SkLearn, requests, Flask, among others.
                    </v-card-text>
                </v-card>
            </v-stepper-content>

            <v-stepper-step :complete="e6 > 2" step="2" editable >
                Audience
            </v-stepper-step>
            <v-stepper-content step="2">
                <v-card color="grey lighten-4" class="mb-2">
                    <v-card-text class="text-justify">
                        This course has no prerequisite. It aims everyone who wants to learn the basics of Python,
                        covering the basis of programming languages and giving an hands-on experience on one of the
                        most requested skills from the market.
                    </v-card-text>
                </v-card>
            </v-stepper-content>

            <v-stepper-step :complete="e6 > 3" step="3" editable >
                Program
            </v-stepper-step>
            <v-stepper-content step="3">
                <v-card color="grey lighten-4" class="mb-2">
                    <v-card-text class="text-justify">
                        1. Setup <br>
                        2. Variables and logical operators <br>
                        3. Data structures <br>
                        4. Flow control <br>
                        5. I/O <br>
                        6. Functions <br>
                        7. Classes <br>
                        8. Introduction to APIs (How to use them & How to build a RESTful API using Flask) <br>
                        9. Final assignment <br>
                    </v-card-text>
                </v-card>
            </v-stepper-content>

            <v-stepper-step :complete="e6 > 4" step="4" editable >
                Timeline
            </v-stepper-step>
            <v-stepper-content step="4">
                <v-card color="grey lighten-4" class="mb-2">
                    <v-card-text class="text-justify">
                        Every class is 1h30minutes and we need at least 5 hours for the final assignment.
                    </v-card-text>
                </v-card>
            </v-stepper-content>

            <v-stepper-step :complete="e6 > 5" step="5" editable >
                Price
            </v-stepper-step>
            <v-stepper-content step="5">
                <v-card color="grey lighten-4" class="mb-2">
                    <v-card-text class="text-justify">
                        Universities: 250€* / student <br>
                        <small>(University should take care of catering and venue)</small><br><br>
                        Companies: 600€* / participant <br>
                        <small>We require a minimum of 10 participants to run the course. <br>
                            (Company should take care of catering and venue)</small><br><br>
                        <small>(*) VAT excluded</small>
                    </v-card-text>
                </v-card>
            </v-stepper-content>
        </v-stepper>
    </v-card>
</template>

<script>
    export default {
        name: "IntroPythonCard",
        data () {
            return {
                e6: 1,
            }
        },
    }
</script>

<style scoped>

</style>