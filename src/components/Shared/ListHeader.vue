<template>
  <q-banner
    inline-actions
    class="list-header text-white text-center">
      <span class="text-bold text-subtitle1"><slot></slot> </span>
    </q-banner>
</template>

<script>
export default {

}
</script>

<style>
.list-header {
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    
}
</style>