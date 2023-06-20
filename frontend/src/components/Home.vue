<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
const user = ref()
onMounted(async () => {
  const data = await axios.get('/api/user')
  console.log(data)
})
</script>
<template lang="">
  <h2 class="text-center text-4xl">Home page</h2>
  <h3>{{ data?.data.email }}</h3>
</template>

<style lang=""></style>
