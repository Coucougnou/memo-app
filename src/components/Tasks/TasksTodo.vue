<template>

    <transition
      appear
      enter-active-class="animated zoomIn"
      leave-active-class="animated zoomOut" >
        <div>
            <list-header
              v-if="!settings.showTasksInOneList"
              class="text-weight-thin"
              style="background: linear-gradient(to right, #000046, #1cb5e0);font-family:Montserrat;"
              >Tâches
              à
              faire</list-header>

            <q-list 
            separator
            bordered>
                <task
                v-for="(task, key) in tasksTodo"
                :key= "key"
                :task="task"
                :id="key"></task>
            </q-list>
        </div>
    </transition>
</template>

<script>

import { mapGetters } from 'vuex'

export default {
    props: ['tasksTodo'],
    computed: {
        ...mapGetters('settings', ['settings'])
    },
    components: {
          'task' : require('components/Tasks/Task.vue').default,
          'list-header' : require('components/Shared/ListHeader.vue').default,
    }
}
</script>

<style>
.bg{
    background: linear-gradient(to bottom, #f46b45, #eea849);
}
</style>