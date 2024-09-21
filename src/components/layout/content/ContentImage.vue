<template>
  <div class="text-center">
    <img :src="text" alt="" class="max-w-full rounded" />
  </div>
</template>

<script setup lang="ts">
type TProps = {
  text: string
}

defineProps<TProps>()
</script>

<style scoped></style>
