<template>
  <p class="text-center text-[#97AACD]">{{ text }}</p>
</template>

<script setup lang="ts">
type TProps = {
  text: string
}

defineProps<TProps>()
</script>

<style scoped></style>
