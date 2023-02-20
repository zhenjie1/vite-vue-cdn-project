<script lang="ts" setup>
import { ref } from 'vue'
defineProps({
  msg: {
    type: String,
    default: 'Vite + Vue',
  },
})

const value = ref()
</script>

<template>
  <div class="containerBox">
    this is a home
    <p>{{ msg }}</p>

    <a-range-picker v-model:value="value" />
  </div>
</template>

<style lang="scss" scoped>
.containerBox {
}
</style>
