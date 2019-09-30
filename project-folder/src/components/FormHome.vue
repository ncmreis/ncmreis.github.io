<template>
    <form>
        <v-container grid-list-xl>
            <v-layout row wrap align-start>
                <v-flex xs12 md6>
                    <v-text-field
                            v-model="name"
                            :error-messages="nameErrors"
                            :counter="20"
                            label="Name"
                            required
                            @input="$v.name.$touch()"
                            @blur="$v.name.$touch()"
                    ></v-text-field>
                </v-flex>
                <v-flex xs12 md6>
                    <v-text-field
                v-model="email"
                :error-messages="emailErrors"
                label="E-mail"
                required
                @input="$v.email.$touch()"
                @blur="$v.email.$touch()"
                    ></v-text-field>
                </v-flex>
            </v-layout>
        </v-container>
        <v-container grid-list-xl>
            <v-layout row wrap align-start>
                <v-flex xs12 md12>
                    <v-textarea
                            v-model="message"
                            label="Message"
                            rows="1"
                            auto-grow
                            required
                            @blur="$v.message.$touch()"
                    ></v-textarea>
                </v-flex>
            </v-layout>
        </v-container>
        <v-container grid-list-xl>
            <v-layout row align-center>
                <v-flex xs12 md12 class="mb-10">
                        <v-btn class="mr-4" @click="submit">send message</v-btn>
                        <v-btn @click="clear">clear</v-btn>
                </v-flex>
            </v-layout>
        </v-container>
    </form>
</template>

<script>
    import { validationMixin } from 'vuelidate'
    import { required, email } from 'vuelidate/lib/validators'


    export default {
        name: "FormHome",
        mixins: [validationMixin],
        validations: {
            name: { required },
            email: { required, email },
            message: { required }
        },

        data: () => ({
            name: '',
            email: '',
            message: 'I would like to schedule a call to know more about your courses',
        }),

        computed: {
            nameErrors () {
                const errors = []
                if (!this.$v.name.$dirty) return errors
                !this.$v.name.maxLength && errors.push('Name must be at most 20 characters long')
                !this.$v.name.required && errors.push('Name is required.')
                return errors
            },
            emailErrors () {
                const errors = []
                if (!this.$v.email.$dirty) return errors
                !this.$v.email.email && errors.push('Must be valid e-mail')
                !this.$v.email.required && errors.push('E-mail is required')
                return errors
            },
        },

        methods: {
            submit () {
                if(!this.$v.$invalid) {
                    const user = {
                        email: this.email,
                        name: this.name
                    };
                    this.$v.$touch()
                }
            },
            clear () {
                this.$v.$reset()
                this.name = ''
                this.email = ''
                this.message = ''
            },
        },
    }
</script>

<style scoped>

</style>
