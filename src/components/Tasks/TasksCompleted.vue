<template>
<div>
    <list-header style="background-color:#508771;font-family:Montserrat;"> Tâches accomplis</list-header>
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
</template>

<script>

export default {
    props: ['tasksCompleted'],
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