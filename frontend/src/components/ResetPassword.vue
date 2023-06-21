<script setup>
import axios from 'axios'
import { ref } from 'vue'
import { useAuthStore } from '../stores/auth.js'
import { useRoute } from 'vue-router'
const authStore = useAuthStore()
const route = useRoute()
const form = ref({
  token: route.params.token,
  email: route.query.email,
  password: '',
  password_confirmation: ''
})
</script>
<template lang="">
  <h2 class="text-center font-bold text-3xl pb-5">Reset Password</h2>

  <div class="w-1/2 mx-auto">
    <form @submit.prevent="authStore.handleResetPassword(form)">
      <div class="mb-6">
        <input
          type="password"
          v-model="form.password"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Password"
        />
      </div>
      <div v-if="authStore.errors.password" class="flex mb-5 text-red-600">
        <p>{{ authStore.errors.password[0] }}</p>
      </div>
      <div class="mb-6">
        <input
          type="password"
          v-model="form.password_confirmation"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Confirm Password"
        />
      </div>
      <div v-if="authStore.errors.password_confirmation" class="flex mb-5 text-red-600">
        <p>{{ authStore.errors.password_confirmation[0] }}</p>
      </div>
      <button
        type="submit"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Reset Password
      </button>
    </form>
  </div>
</template>
