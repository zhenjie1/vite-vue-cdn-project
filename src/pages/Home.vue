<script lang="ts" setup>
defineProps({
  msg: {
    type: String,
    default: 'Vite + Vue'
  }
})
</script>

<template>
  <div class="containerBox">
    this is a home
    <p>{{ msg }}</p>

    <n-input class="mt-10"/>
  </div>
</template>

<style lang="scss" scoped>
.containerBox {
}
</style>
