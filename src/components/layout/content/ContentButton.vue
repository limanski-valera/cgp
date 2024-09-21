<template>
  <Button class="bg-[#4368E0] py-2 px-8 text-white hover:bg-[#395ac5]">{{ text }}</Button>
</template>

<script setup lang="ts">
import Button from '@/components/ui/button/Button.vue'

type TProps = {
  text: string
}

defineProps<TProps>()
</script>

<style scoped></style>
