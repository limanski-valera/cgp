<template>
  <div class="workspace bg-[#F5F5FC] p-2 lg:px-6 lg:py-8">
    <ul class="flex flex-col gap-4">
      <li v-for="item in mainStore.content" :key="item.id">
        <WorkspaceItem :item="item" />
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import WorkspaceItem from './WorkspaceItem.vue'
import { useMainStore } from '@/stores/main'

const mainStore = useMainStore()
</script>

<style scoped></style>
