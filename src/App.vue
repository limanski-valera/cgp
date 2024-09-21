<script setup lang="ts">
import LayoutHeader from './components/layout/header/LayoutHeader.vue'
import LayoutSidebar from './components/layout/sidebar/LayoutSidebar.vue'
import LayoutWorkspace from './components/layout/workspace/LayoutWorkspace.vue'
import LayoutContent from './components/layout/content/LayoutContent.vue'

import { useDragAndDrop } from './hooks/useDragAndDrop'

const dragAndDrop = useDragAndDrop()
</script>

<template>
  <div class="wrapper min-h-svh flex flex-col">
    <LayoutHeader />
    <main class="content flex-grow flex">
      <LayoutSidebar
        class="basis-2/12"
        @start-drag="dragAndDrop.handleDragStart"
        @end-drag="dragAndDrop.handleDragEnd"
      />
      <LayoutWorkspace
        class="basis-5/12"
        @dragover="dragAndDrop.handleDragOver"
        @drop="() => dragAndDrop.handleDrop()"
      />
      <LayoutContent class="basis-5/12" />
    </main>
  </div>
</template>

<style scoped></style>
