<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import { useAuthStore } from '../stores/auth'
const authStore = useAuthStore()
const user = ref()
onMounted(async () => {
  await authStore.getUser()
})
</script>
<template lang="">
  <div class="container mx-auto w-11/12">
    <h2 class="text-center text-4xl">Home page</h2>
    <div v-if="authStore.user">
      <h2>ID: {{ authStore.user.id }}</h2>
      <h2>Name: {{ authStore.user.name }}</h2>
      <h2>Email: {{ authStore.user.email }}</h2>
    </div>
    <div v-else>
      <p>Go to <router-link :to="{ name: 'Login' }">Login</router-link></p>
    </div>
  </div>
</template>

<style lang=""></style>
