<template>
  <q-page padding> 
     <q-card class="auth-tabs">
        <q-tabs
          v-model="tab"
          dense
          class="text-grey"
          active-color="primary"
          indicator-color="primary"
          align="justify"
          narrow-indicator
        >
          <q-tab name="connexion" label="Connexion" />
          <q-tab name="inscription" label="Inscription" />
        </q-tabs>

        <q-separator />

        <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="connexion">
            <login-register :tab="tab" />
          </q-tab-panel>

          <q-tab-panel name="inscription">
            <login-register :tab="tab" />
          </q-tab-panel>

        </q-tab-panels>
      </q-card>
  </q-page>
</template>

<script>


export default {
data () {
    return {
      tab: 'connexion'
    }
  },
  components: {
      'login-register' : require('components/Auth/LoginRegister.vue').default,
      
  }
}
</script>

<style>
.auth-tabs {
    max-width: 500px;
    margin: 0 auto;
}
</style>