<template>
  <q-layout view="hHh lpR fFf">
    <q-header >
      <q-toolbar style="background: linear-gradient(to right, #000046, #1cb5e0);height:85px;">
        <q-img class="absolute-center" src="../assets/logo.png" style="width:120px;"/>
        <q-btn flat @click="drawerLeft = !drawerLeft" round dense icon="menu" side="right"/>
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
      v-model="drawerLeft"
      :breakpoint="767"
      :width="250" 
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

import { openURL } from 'quasar'

export default {
  name: 'MyLayout',
  data () {
    return {
      drawerLeft: false,
      navs: [
        { 
          label: 'Tâches',
          icon: 'list',
          to: '/'
        },
        { 
          label: 'Informations',
          icon: 'settings',
          to: '/settings'
        },
        
      ]

    }
  },
  methods: {
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
  background-image: url("https://picsum.photos/1920/1080?random");
}
</style>