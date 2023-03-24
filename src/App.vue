<script setup lang="ts">
import zhCN from 'ant-design-vue/es/locale/zh_CN'
import { useRequest } from 'vue-request'
import axios from 'axios'
import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'
dayjs.locale('zh-cn')

const user = () => axios.post('/user/12345')

useRequest(user)
</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo">
    </a>
    <!-- <n-button>123321</n-button> -->
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo">
    </a>
  </div>

  <n-input>123321</n-input>
  <RouterView v-slot="{ Component }">
    <a-config-provider :locale="zhCN">
      <component :is="Component" />
    </a-config-provider>
  </RouterView>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
