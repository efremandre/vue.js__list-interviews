<script setup lang="ts">
import {computed, ref} from 'vue'

const isLogin = ref<boolean>(true)

const toggleAuth = () => {
	isLogin.value = !isLogin.value
}

const subtitleText = computed<string>(()=> {
	return isLogin.value ? 'Аккаунта еще нет?' : 'Уже есть аккаунт?'
})

const linkAccountText = computed<string>(()=> {
	return isLogin.value ? 'Войдите в свою учетную запись' : 'Создайте новую учетную запись'
})
</script>

<template>
  <app-toast position="bottom-right" />
  <div class="flex justify-center p-2">
    <div class="bg-surface-0 dark:bg-surface-900 p-12 shadow rounded-border w-full lg:w-6/12">
      <div class="text-center mb-6">
        <div class="text-surface-900 dark:text-surface-0 text-3xl font-medium mb-6">Приветствую!</div>
        <span class="text-surface-600 dark:text-surface-200 font-medium leading-normal">{{ subtitleText }}</span>
        <a class="font-medium no-underline ml-2 text-blue-500 hover:text-orange-700 cursor-pointer" @click="toggleAuth">
          {{ linkAccountText }}
        </a>
      </div>

      <form @submit.prevent="submitForm">
        <label for="email1" class="block text-surface-900 dark:text-surface-0 font-medium mb-2">Email</label>
        <app-input-text v-model="email" id="email1" type="email" class="w-full mb-6" />

        <label for="password1" class="block text-surface-900 dark:text-surface-0 font-medium mb-2">Пароль</label>
        <app-input-text v-model="password" id="password1" type="password" class="w-full mb-6" />

        <app-button
          :label="submitButtonText"
          type="submit"
          icon="pi pi-user"
          :loading="isLoading"
          class="w-full"
        ></app-button>
      </form>
    </div>
  </div>
</template>
