<template>
  <transition
      appear
      enter-active-class="animated zoomIn"
      leave-active-class="animated zoomOut" >
    <q-banner class="bg-grey-3 text-subtitle2" style="font-family:Montserrat">
        <template v-slot:avatar>
          <q-icon name="check" color="primary" />
        </template>
        Pas de tâche à effectuer aujourd'hui !
        <template v-slot:action>
          <q-btn
            @click="$root.$emit('showAddTask')"
            flat
            color="primary"
            label="Ajouter une tâche" />
        </template>
      </q-banner>
  </transition>
</template>

<script>
export default {

}
</script>

<style>

</style>