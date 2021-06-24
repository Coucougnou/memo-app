<template>
    <div>
    <list-header class="text-weight-thin" style="background: linear-gradient(to right, #000046, #1cb5e0);font-family:Montserrat;">Tâches à faire</list-header>

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
</template>

<script>

export default {
    props: ['tasksTodo'],
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