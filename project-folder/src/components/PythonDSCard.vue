<template>
    <v-card class="transparent ml-3 mr-3">
        <v-card-text class="text-center">
            <v-icon x-large class="purple--text text--lighten-2">mdi-code-tags</v-icon>
        </v-card-text>
        <v-stepper class="elevation-0" v-model="e6" vertical>

            <v-stepper-step :complete="e6 > 1" step="1" editable >
                Course overview
            </v-stepper-step>
            <v-stepper-content step="1">
                <v-card color="grey lighten-4" class="mb-2">
                    <v-card-text class="text-justify">
                        The main goal of this course is to leave students on the stage to become a junior data scientist, giving
                        an overview of specific tools of python to data science and helping students solving problems
                        with it during the lessons.<br><br> There is a possibility to create a tailor-made program that
                        suits every organisation needs and shorts the time from starting to be able to use the
                        knowledge to the company’s advantage. After this, one should be able to think about solutions
                        for problems in a more data driven perspective; it should
                        have hands-on experience on solving real problems.
                    </v-card-text>
                </v-card>
            </v-stepper-content>

            <v-stepper-step :complete="e6 > 2" step="2" editable >
                Audience
            </v-stepper-step>
            <v-stepper-content step="2">
                <v-card color="grey lighten-4" class="mb-2">
                    <v-card-text class="text-justify">
                        This course has a prerequisite of basic Python - our Introduction to Python course is the
                        foundation for this one. Python for Data Science aims to prepare participants for the Data
                        Science world that is ahead of us. <br><br>
                        Because Data Science is such a big field, this course is highly modular and should be built
                        to your specific needs.
                    </v-card-text>
                </v-card>
            </v-stepper-content>

            <v-stepper-step :complete="e6 > 3" step="3" editable >
                Curriculum
            </v-stepper-step>
            <v-stepper-content step="3">
                <v-card color="grey lighten-4" class="mb-2">
                    <v-card-text class="text-justify">
                        <p>
                            This program is composed by 9 lessons on a specific subject and it closes with a one-day
                            hackathon. The goal of this hackathon is to set teams and have students solving a real
                            world problem with supervision. This should be a company problem that should be
                            reviewed by the organising team to be able to provide mentoring.
                        </p>
                        <ol>
                            <li>Libraries and APIs</li>
                            <li>Data collection & cleaning</li>
                            <li>Visualisation</li>
                            <li>Basic statistics</li>
                            <li>Exploratory Data Analysis</li>
                            <li>Supervised learning</li>
                            <li>Unsupervised learning</li>
                            <li>Explainability</li>
                            <li>Deployment</li>
                            <li>Hackathon</li>
                        </ol>
                    </v-card-text>
                </v-card>
            </v-stepper-content>

            <v-stepper-step :complete="e6 > 4" step="4" editable >
                Timeline, teaching methodology and support
            </v-stepper-step>
            <v-stepper-content step="4">
                <v-card color="grey lighten-4" class="mb-2">
                    <v-card-text class="text-justify">
                        <h3>Teaching methodology</h3>
                        <p>
                            We are all pro "hands-on" teaching. Therefore, we will do no more than 20-25min presentations
                            and we will focus all our efforts into getting students with their hands on code while we help
                            them accomplish the tasks we have prepared.<br><br>
                            These tasks are created to guide students to problems they will encounter in their jobs. They are
                            based on our own experience and other industry experts.
                        </p>

                        <h3>Timelines</h3>


                        <ol>
                            <li>Each one of the topics presented in the curriculum will take 1h30.</li>
                            <li>For the final hackhathon we will reserve 8 hours in-class.</li>
                        </ol>
                        <br>

                        <h3>Out of class support</h3>

                        <ol>
                            <li>We will be using slack. Here is where we will answer questions as well as give weekly
                                challenges for those willing to give the extra mile.
                            </li>
                            <li>Our team will provide continuous support throughout the training as well as pre-defined
                                office hours, with a maximum of 5 hours per week.
                            </li>
                        </ol>
                    </v-card-text>
                </v-card>
            </v-stepper-content>

            <v-stepper-step :complete="e6 > 5" step="5" editable >
                Price
            </v-stepper-step>
            <v-stepper-content step="5">
                <v-card color="grey lighten-4" class="mb-2">
                    <v-card-text class="text-justify">
                        <h2>Universities</h2>
                        <br>
                        <p>
                            350€* per student. We will be offering scholarships for students who are in need. Reach out
                            to us to know more about our support programs
                        </p>
                        <h2>Companies</h2>
                        <br>
                        <p>
                            1500€* per participant.
                        </p>
                        <br>
                        <div class="text-center">
                            <small>We require a minimum of 7 participants to run the course. <br>
                                (Both Companies and Universities should take care of catering and venue)</small><br><br>
                            <small>(*) VAT excluded</small>
                        </div>
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