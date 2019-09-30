<template>
    <v-card v-show="show1" class="transparent ml-3 mr-3">
        <v-card-text class="text-center">
            <v-icon x-large class="purple--text text--lighten-2">mdi-code-tags</v-icon>
        </v-card-text>
        <v-stepper class="elevation-0" v-model="e6" vertical>

            <v-stepper-step :complete="e6 > 1" step="1" editable >
                Main Goal
            </v-stepper-step>
            <v-stepper-content step="1">
                <v-card color="grey lighten-4" class="mb-12">
                    <v-card-text class="text-justify">
                        Create a tailor-made program that suits every organisation needs and shorts the time from
                        starting to be able to use the knowledge to the company’s advantage. After this, one should
                        be able to think about solutions for problems in a more data driven perspective; it should
                        have hands-on experience on solving real problems.
                    </v-card-text>
                </v-card>
                <v-btn color="primary" @click="e6 = 2">Audience</v-btn>
            </v-stepper-content>

            <v-stepper-step :complete="e6 > 2" step="2" editable >
                Audience
            </v-stepper-step>
            <v-stepper-content step="2">
                <v-card color="grey lighten-4" class="mb-12">
                    <v-card-text class="text-justify">
                        This course has a prerequisite of basic Python - our Introduction to Python course is the
                        foundation for this one. Python for Data Science aims to prepare participants for the Data
                        Science world that is ahead of us. <br><br>
                        Because Data Science is such a big field, this course is highly modular and should be built
                        to your specific needs.
                    </v-card-text>
                </v-card>
                <v-btn color="primary" @click="e6 = 3">Program</v-btn>
            </v-stepper-content>

            <v-stepper-step :complete="e6 > 3" step="3" editable >
                Program
            </v-stepper-step>
            <v-stepper-content step="3">
                <v-card color="grey lighten-4" class="mb-12">
                    <v-card-text class="text-justify">
                        1. Libraries and APIs<br>
                        2. Data collection & cleaning<br>
                        3. Visualisation<br>
                        4. Basic statistics<br>
                        5. Exploratory Data Analysis<br>
                        6. Supervised learning<br>
                        7. Unsupervised learning<br>
                        8. Explainability<br>
                        9. Deployment<br>
                        10. Hackathon<br><br>
                        <small>The program closes with a hackathon. The goal of this hackthon is to set teams and
                            have students solving a real world problem with little supervision. This should be a
                            company problem that should be seen by the organising team to be able to provide
                            mentoring.</small>
                    </v-card-text>
                </v-card>
                <v-btn color="primary" @click="e6 = 4">Timeline</v-btn>
            </v-stepper-content>

            <v-stepper-step :complete="e6 > 4" step="4" editable >
                Timeline
            </v-stepper-step>
            <v-stepper-content step="4">
                <v-card color="grey lighten-4" class="mb-12">
                    <v-card-text class="text-justify">
                        Every class is 1h30minutes and we need 8h for the hackathon.
                    </v-card-text>
                </v-card>
                <v-btn color="primary" @click="e6 = 5">Price</v-btn>
            </v-stepper-content>

            <v-stepper-step :complete="e6 > 5" step="5" editable >
                Price
            </v-stepper-step>
            <v-stepper-content step="5">
                <v-card color="grey lighten-4" class="mb-12">
                    <v-card-text class="text-justify">
                        Universities: 350€* / student <br>
                        <small>(University should take care of catering and venue)</small><br><br>
                        Companies: 1500€* / participant <br>
                        <small>We require a minimum of 7 participants to run the course. <br>
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
        name: "PythonDSCard",
        data () {
            return {
                e6: 1,
            }
        },
    }
</script>

<style scoped>

</style>