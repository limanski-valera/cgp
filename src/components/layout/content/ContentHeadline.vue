<template>
  <h2 class="font-bold text-2xl text-center">{{ text }}</h2>
</template>

<script setup lang="ts">
type TProps = {
  text: string
}

defineProps<TProps>()
</script>

<style scoped></style>
