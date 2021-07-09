<template>
     <q-card>
        <modal-header style="font-family:Montserrat;">Ajouter une Tâche</modal-header>

        <form @submit.prevent="submitForm">
            <q-card-section>

                <modal-task-name 
                :name.sync="taskToSubmit.name"
                ref="modalTaskName" />

                <modal-due-date 
                :dueDate.sync="taskToSubmit.dueDate"
                @clear="clearDueDate"/>

                <modal-due-time 
                v-if="taskToSubmit.dueDate"
                :dueTime.sync="taskToSubmit.dueTime"/>


        </q-card-section>

        <modal-buttons></modal-buttons>
        </form>

      </q-card>
</template>

<script>
    import { mapActions } from 'vuex'
    import mixinAddEditTask from 'src/mixins/mixin-add-edit-task'

    export default {
        mixins: [mixinAddEditTask],
        data() {
            return {
                taskToSubmit : {
                    name: '',
                    completed: false,
                    dueDate: '',
                    dueTime: ''
                }
            }
        },
        methods: {
            ...mapActions('tasks', ['addTask']),
            submitTask() {
                //console.log('submitTask');
                this.addTask(this.taskToSubmit)
                this.$emit('close')
            }
        },
}

</script>
