<template>
    <transition
      appear
      enter-active-class="animated zoomIn"
      leave-active-class="animated zoomOut" >
      
        <div :class="{ 'q-mt-lg' : !settings.showTasksInOneList }">
            <list-header
             v-if="!settings.showTasksInOneList"
             style="background-color:#508771;font-family:Montserrat;"> Tâches accomplis</list-header>
                <q-list 
                separator
                bordered>

                    <task
                    
                    v-for="(task, key) in tasksCompleted"
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
    props: ['tasksCompleted'],
    computed: {
    ...mapGetters('settings', ['settings'])
  },
    components: {
          'task' : require('components/Tasks/Task.vue').default,
          'list-header' : require('components/Shared/ListHeader.vue').default
    }
}
</script>

<style>
.bg2 {
   background: linear-gradient(to bottom, #76b852, #8dc26f);
}
</style>