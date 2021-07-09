<template>
   <div class="row q-mb-sm">
                <q-input
                  outlined
                  :value="name"
                  @input="$emit('update:name', $event)"
                  :rules="[val => !!val || 'Nom requis']"
                  autofocus
                  v-select-all
                  ref="name"
                  label="Nom de la tâche"
                  class="col">
                    <template v-slot:append>
                    <q-icon
                      v-if="name"
                      @click="$emit('update:name', '')"
                      name="close"
                      class="cursor-pointer" />
                    </template>
                </q-input>
    </div>
</template>

<script>

import { selectAll } from 'src/directives/directive-select-all'

export default {
    props: ['name'],
    directives: {
        selectAll
    }
}
</script>

<style>

</style>