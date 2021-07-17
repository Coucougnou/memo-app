<template>
  <q-page padding  style="font-family:Montserrat;">
    <q-list
      class="q-mb-md"
      bordered
      padding
    >

      <q-item-label header>Paramètres</q-item-label>

      <q-item tag="label" v-ripple>
        <q-item-section>
          <q-item-label>Afficher le format 12h</q-item-label>
        </q-item-section>
        <q-item-section side >
          <q-toggle
            v-model="show12HourTimeFormat"
            color="blue"
          />
        </q-item-section>
      </q-item>

      <q-item tag="label" v-ripple>
        <q-item-section>
          <q-item-label>Afficher les tâches sur une seul liste</q-item-label>
        </q-item-section>
        <q-item-section side >
          <q-toggle
            v-model="showTasksInOneList"
            color="blue"
          />
        </q-item-section>
      </q-item>

    </q-list>

    <q-list bordered padding>

      <q-item-label header>En savoir plus</q-item-label>

      <q-item
        to="/settings/help"
        v-ripple
        tag="label"
      >
        <q-item-section>
          <q-item-label>Aide</q-item-label>
        </q-item-section>
        <q-item-section side >
          <q-icon name="chevron_right" />
        </q-item-section>
      </q-item>

      <q-item
        @click="visitOurWebsite"
        v-ripple
        tag="label"
      >
        <q-item-section>
          <q-item-label>Visitez nos autres créations</q-item-label>
        </q-item-section>
        <q-item-section side >
          <q-icon name="chevron_right" />
        </q-item-section>
      </q-item>

      <q-item
        @click="emailUs"
        v-ripple
        tag="label"
      >
        <q-item-section>
          <q-item-label>Nous contacter</q-item-label>
        </q-item-section>
        <q-item-section side >
          <q-icon name="chevron_right" />
        </q-item-section>
      </q-item>

    </q-list>
  </q-page>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { openURL } from 'quasar'

export default {
  computed: {
    ...mapGetters('settings', ['settings']),
    show12HourTimeFormat: {
      get() {
        return this.settings.show12HourTimeFormat
      },
      set(value) {
        this.setShow12HourTimeFormat(value)
      }
    },
    showTasksInOneList: {
      get() {
        return this.settings.showTasksInOneList
      },
      set(value) {
        this.setShowTasksInOneList(value)
      }
    },
  },
  methods: {
    ...mapActions('settings', ['setShow12HourTimeFormat', 'setShowTasksInOneList']),
    visitOurWebsite() {
      openURL('https://jonathanngomegniit.netlify.app')
    },
    emailUs() {
      window.location.href = 'mailto:jonathanngomegni.it@gmail.com?subject=Memo Appli Feedback'
    }
  }
}
</script>

<style>
</style>
