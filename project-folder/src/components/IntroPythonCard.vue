<template>
    <v-card class="transparent ml-1 mr-1">
        <v-stepper class="elevation-0" vertical>

            <v-stepper-step color=grey step="1" class="mt-1" editable>
                Course overview
            </v-stepper-step>
            <v-stepper-content step="1">
                <v-card color="grey lighten-4" class="mb-2">
                    <v-card-text>
                        This course should teach you tools and the building blocks of Python and programming in general.
                        The program was thought taking into account the following outcomes:
                        <br><br>
                        <ol>
                            <li>
                                Be able to do simple and local automations;
                            </li>
                            <li>
                                Have the basic ground to move faster into areas that are Python-dependent, e.g: Machine
                                Learning, Deploying ML models into production, Data Analysis, etc.
                            </li>
                            <li>
                                Teach you how to leverage your solutions by using open-source libraries and giving
                                you hands-on experience on APIs, like Pandas, scikit-learn, requests, among others;
                            </li>
                        </ol>
                    </v-card-text>
                </v-card>
            </v-stepper-content>

            <v-stepper-step color=grey step="2" editable >
                Audience
            </v-stepper-step>
            <v-stepper-content step="2">
                <v-card color="grey lighten-4" class="mb-2">
                    <v-card-text>
                        This course has no prerequisites. It is for everyone who wants to learn the basics of Python,
                        covering the basis of programming languages and giving an hands-on experience on one of the
                        most requested skills from the market. Naturally, if you have experience with other programming
                        languages this will be a smoother experience but our program is designed for non-technical people
                        so we confidently say this is a "no experience required".
                    </v-card-text>
                </v-card>
            </v-stepper-content>

            <v-stepper-step color=grey step="3" editable >
                Curriculum
            </v-stepper-step>
            <v-stepper-content step="3">
                <v-card color="grey lighten-4" class="mb-2">
                    <v-card-text>
                        <p>
                            Our curriculum is designed to get you as fast as possible with the basic principles of the Python
                            language while giving you some understanding on how programming works in general.
                            Depending on your needs we can add other topics but we highly recommend not removing any of these as
                            we believe they constitute the building blocks of modern Python programming.
                        </p>
                        <ol>
                            <li>Environment Setup</li>
                            <li>Operators</li>
                            <li>Data structures</li>
                            <li>Flow control</li>
                            <li>I/O</li>
                            <li>Functions</li>
                            <li>Classes</li>
                            <li>Introduction to APIs</li>
                            <li>Final assignment</li>
                        </ol>
                    </v-card-text>
                </v-card>
            </v-stepper-content>

            <v-stepper-step color=grey step="4" editable >
                Timeline
            </v-stepper-step>
            <v-stepper-content step="4">
                <v-card color="grey lighten-4" class="mb-2">
                    <v-card-text>
                        <ol>
                            <li>Each one of the topics presented in the curriculum will take 1h30.</li>
                            <li>For the final assignment we will reserve 5 hours in-class and one week out of class.</li>
                        </ol>
                    </v-card-text>
                </v-card>
            </v-stepper-content>

            <v-stepper-step color=grey step="5" editable >
                Teaching methodology
            </v-stepper-step>
            <v-stepper-content step="5">
                <v-card color="grey lighten-4" class="mb-2">
                    <v-card-text>
                        <p>
                            We are all pro "hands-on" teaching. Therefore, we will do no more than 20-25min presentations
                            and we will focus all our efforts into getting students to get their hands on code while we help
                            them accomplish the tasks we have prepared.<br><br>
                            These tasks are created to guide students to problems they will encounter in their jobs. They are
                            based on our own experience and other industry experts'.
                        </p>
                    </v-card-text>
                </v-card>
            </v-stepper-content>

            <v-stepper-step color=grey step="6" editable >
                Office hours
            </v-stepper-step>
            <v-stepper-content step="6">
                <v-card color="grey lighten-4" class="mb-2">
                    <v-card-text>
                        <ol>
                            <li>We will be using slack, where we will answer questions as well as give weekly
                                challenges for those willing to go the extra mile.
                            </li>
                            <li>Our team will provide continuous support throughout the training as well as pre-defined
                                office hours, with a maximum of 5 hours per week.
                            </li>
                        </ol>
                    </v-card-text>
                </v-card>
            </v-stepper-content>

            <v-stepper-step color=grey step="7" editable >
                Price
            </v-stepper-step>
            <v-stepper-content step="7">
                <v-card color="grey lighten-4" class="mb-2">
                    <v-card-text>
                        <h2>Universities</h2>
                        <br>
                        <p>
                            350€* per student. We will be offering scholarships for students who are in need. Reach out to us
                            to know more about our support programs
                        </p>
                        <h2>Companies</h2>
                        <br>
                        <p>
                            600€* per participant.
                        </p>
                        <br>
                        <div class="text-center">
                            <small>We require a minimum of 10 participants to run the course. <br>
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
        methods: {
            goToSection(hashSection) {
                var elmnt = document.getElementById(hashSection);
                elmnt.scrollIntoView({behavior: 'smooth'});
            },
        }
    }
</script>

<style scoped>

</style>