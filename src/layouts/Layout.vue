<template>
  <q-layout view="hHh lpR fFf">
    <q-header >
      <q-toolbar style="background: linear-gradient(to right, #000046, #1cb5e0);height:80px;">
        <q-img
          class="absolute-center"
          src="../assets/logo.png"
          style="width:120px;" />

        <q-btn
        v-if="!loggedIn"
          to="/auth"
          flat
          icon-right="account_circle"
          label="Connexion"
          class="absolute-right" />

        <q-btn
          v-else
          @click="logoutUser"
          to="/auth"
          flat
          icon-right="account_circle"
          label="Deconnexion"
          class="absolute-right" />

      </q-toolbar>
    </q-header>

  <q-footer>
           <q-tabs style="font-family:Montserrat;background: linear-gradient(to right, #000046, #1cb5e0);">
        <q-route-tab
          v-for="nav in navs"
          :key="nav.label"
          :to="nav.to" 
          :icon="nav.icon"
          :label="nav.label"
         />
         
      </q-tabs>
      </q-footer>
    <q-drawer
      v-model="leftDrawerOpen"
      :breakpoint="767"
      :width="250"
      show-if-above
      bordered
    >
      <q-list padding>
        <q-item-label
          header
          class="text-white text-weight-thin text-subtitle1"
          style="font-family:Montserrat;"
        >
         Bienvenue,<br>alors prêt à effectuer <br> une tâche ?
        </q-item-label>
        <q-item
        v-for="nav in navs"
        exact
        class="text-white"
        style="font-family:Montserrat;"
        :key="nav.label" 
        :to="nav.to"
        clickable>
          <q-item-section avatar>
            <q-icon :name="nav.icon" />
          </q-item-section> 
          <q-item-section>
            <q-item-label> {{ nav.label }} </q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { openURL } from 'quasar'

export default {
  name: 'MyLayout',
  data () {
    return {
      leftDrawerOpen: false,
      navs: [
        { 
          label: 'Tâches',
          icon: 'list',
          to: '/'
        },
        { 
          label: 'Paramètres',
          icon: 'settings',
          to: '/settings'
        },
        
      ]

    }
  },
  computed: {
    ...mapState('auth', ['loggedIn'])
  },
  methods: {
    ...mapActions('auth', ['logoutUser']),
    openURL
  }
}
</script>


<style>
@media screen and 
  (min-width: 768px) {
    .q-footer {
      display: none;
    }
  }

.q-drawer .q-router-link--exact-active {
  color: white !important;
}

.q-drawer {
 background: linear-gradient(to bottom, #000046, #1cb5e0);
}

.q-footer {
   background: linear-gradient(to left, #56ccf2, #2f80ed);
}

.q-page {
  background: white;
}
</style>