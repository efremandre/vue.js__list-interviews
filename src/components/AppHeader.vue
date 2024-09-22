<script setup lang="ts">
import { ref, computed, ComputedRef } from 'vue'
import { useUserStore } from '@/stores/user'

const userStore = useUserStore()

interface IMenuItem {
  label: string
  icon: string
  path: string
  show: ComputedRef<boolean>
}

const items = ref<IMenuItem[]>([
  {
    label: 'Войти',
    icon: 'pi pi-user',
    path: '/auth',
    show: computed((): boolean => !userStore.userId)
  },
  {
    label: 'Главная',
    icon: 'pi pi-home',
    path: '/',
    show: computed((): boolean => !!userStore.userId)
  },
  {
    label: 'Интервью',
    icon: 'pi pi-briefcase',
    path: '/interview/:id',
    show: computed((): boolean => !!userStore.userId)
  },
  {
    label: 'Список собесов',
    icon: 'pi pi-list',
    path: '/list',
    show: computed((): boolean => !!userStore.userId)
  },
  {
    label: 'Статистика',
    icon: 'pi pi-chart-bar',
    path: '/statistic',
    show: computed((): boolean => !!userStore.userId)
  }
])
</script>

<template>
  <div>
    <app-menubar :model="items" class="menu">
      <template #item="{ item, props }">
        <template v-if="item.show">
          <router-link :to="item.path" class="flex align-items-center" v-bind="props.action">
            <span :class="item.icon" class="p-menuitem-icon" />
            <span class="ml-2">{{ item.label }}</span>
          </router-link>
        </template>
      </template>
      <template #end>
        <div
          class="flex align-items-center menu-exit"
          v-if="userStore.userId"
          @click="userStore.userId = ''"
        >
          <span class="pi pi-sign-out p-menuitem-icon" />
          <span class="ml-2">Выход</span>
        </div>
      </template>
    </app-menubar>
  </div>
</template>

<style scoped>
.menu {
  margin: 30px 0;
}

.menu-exit {
  cursor: pointer;
}
</style>
