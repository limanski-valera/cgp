<template>
  <div class="py-4 px-3 flex flex-col gap-2 items-center rounded-lg bg-[#F6F9FE] cursor-pointer hover:bg-[#eef4ff] transition-all">
    <img :src="icon" :alt="label" width="25" height="25" />
    <h3>{{ label }}</h3>
  </div>
</template>

<script setup lang="ts">
type TProps = {
  icon: string
  label: string
}

defineProps<TProps>()
</script>

<style scoped></style>
