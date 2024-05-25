<template>
  <div>
    
    <NuxtPage/>
  </div>
</template>


<script setup lang="ts"> 
onMounted(() => {
  getLoacl()
  window.onbeforeunload = () => {
    setLocal() 
  }
})
</script>

<style>
:root {
  --van-primary-color: #fa6d1d !important;
}
</style>