<script setup>
import axios from 'axios'
import { ref } from 'vue'
import { useAuthStore } from '../stores/auth'
const form = ref({
  name: '',
  email: '',
  password: ''
})
const authStore = useAuthStore()
console.log(authStore)
</script>
<template lang="">
  <h2 class="text-center font-bold text-3xl pb-5">Register</h2>

  <div class="w-1/2 mx-auto">
    <form @submit.prevent="authStore.handleRegister(form)">
      <div class="mb-6">
        <input
          type="text"
          v-model="form.name"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="name"
        />
      </div>
      <div v-if="authStore.errors.name" class="flex mb-5 text-red-600">
        <p>{{ authStore.errors.name[0] }}</p>
      </div>
      <div class="mb-6">
        <input
          type="email"
          v-model="form.email"
          id="email"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="name@flowbite.com"
        />
      </div>
      <div v-if="authStore.errors.name" class="flex mb-5 text-red-600">
        <p>{{ authStore.errors.email[0] }}</p>
      </div>
      <div class="mb-6">
        <input
          type="password"
          v-model="form.password"
          id="password"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
      <div v-if="authStore.errors.name" class="flex mb-5 text-red-600">
        <p>{{ authStore.errors.password[0] }}</p>
      </div>
      <button
        type="submit"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Submit
      </button>
    </form>
  </div>
</template>
