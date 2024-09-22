import './assets/main.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'

import { initializeApp } from 'firebase/app'

import { createPinia } from 'pinia'
import { createApp } from 'vue'

import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'
import Menubar from 'primevue/menubar'

import App from './App.vue'
import router from './router'

const firebaseConfig = {
  apiKey: 'AIzaSyDO8LI8J5pH1yriNCB24edPIbt4D95UGbE',
  authDomain: 'list-interview-cc7ea.firebaseapp.com',
  projectId: 'list-interview-cc7ea',
  storageBucket: 'list-interview-cc7ea.appspot.com',
  messagingSenderId: '865704037402',
  appId: '1:865704037402:web:497331ec5ec8382ca155a3'
}

initializeApp(firebaseConfig)

const app = createApp(App)

app.use(createPinia())
app.use(PrimeVue, {
  theme: {
    preset: Aura
  }
})

app.component('app-menubar', Menubar)

app.use(router)

app.mount('#app')
