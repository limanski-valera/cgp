<template>
  <aside class="sidebar border-r p-2 2xl:p-8">
    <div class="flex flex-col gap-3 lg:grid-cols-2 lg:grid">
      <SidebarItem
        v-for="tool in tools"
        :key="tool.id"
        :icon="tool.icon"
        :label="tool.label"
        draggable="true"
        @click="mainStore.addBlock(tool.type)"
        @dragstart="$emit('startDrag', tool)"
        @dragend="$emit('endDrag')"
      />
    </div>
  </aside>
</template>

<script setup lang="ts">
import { useMainStore } from '@/stores/main'
import SidebarItem from './SidebarItem.vue'

import { tools } from '@/data/constants'

defineEmits(['startDrag', 'endDrag'])

const mainStore = useMainStore()
</script>

<style scoped></style>
