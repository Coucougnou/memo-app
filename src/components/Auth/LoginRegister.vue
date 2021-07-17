<template>
    <form @submit.prevent="submitForm">
        <div class="row q-mb-md">
            <q-banner class="bg-grey-3 col">
                <template v-slot:avatar>
                    <q-icon name="account_circle" color="primary" />
                </template>
                {{ tab | titleCase }} requise pour accéder à vos Tâches partout !
            </q-banner>
        </div>
        <div class="row q-mb-md">
        <q-input
          class="col"
          outlined
          v-model="formData.email"
          ref="email"
          label="Email"
          stack-label
          :rules="[ val => isValidEmailAddress(val) || 'Veuillez utiliser une adresse email valide.']"
          lazy-rules
          />
        </div>
        <div class="row q-mb-md">
        <q-input
          class="col"
          outlined
          v-model="formData.password"
          ref="password"
          type="password"
          label="Mot de Passe"
          stack-label
          :rules="[ val => val.length >= 6 || 'Veuillez utiliser au minimum 6 caractères']"
          lazy-rules
           />
        </div>
        <div class="row">
            <q-btn 
            color="primary"
            :label="tab"
            type="submit"
            />
        </div>
    </form>
</template>

<script>
import { mapActions } from 'vuex'


export default {
    props: ['tab'],
    data() {
        return {
            formData: {
                email: '',
                password: ''
            }
        }
    },
    methods: {
        ...mapActions('auth', ['registerUser', 'loginUser']),
        isValidEmailAddress(email) {
           var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            return re.test(String(email).toLowerCase());
        },
        submitForm() {
            this.$refs.email.validate()
            this.$refs.password.validate()
            if (!this.$refs.email.hasError && !this.$refs.password.hasError) {
               if (this.tab == 'connexion') {
                   this.loginUser(this.formData)
               }
               else {
                   this.registerUser(this.formData)
               }
            }
        }
    },
    filters: {
        titleCase(value) {
            return value.charAt(0).toUpperCase() + value.slice(1)
        }
    }
}
</script>

<style>

</style>