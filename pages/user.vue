<script setup lang="ts">
const logout = () =>{
  navigateTo('/login')
}
</script>


<template>
  <NuxtLayout name="tabbar">
    <h1>User</h1>
  <button @click="logout">Logout</button> 
 </NuxtLayout>
</template>