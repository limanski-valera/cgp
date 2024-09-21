<template>
  <div class="border-l p-2 flex flex-col gap-2 items-center lg:gap-8 lg:p-8">
    <component
      v-for="item in mainStore.notEmptyBlocks"
      :key="item.icon"
      :is="getComponent(item.type)"
      :text="item.content"
    />
  </div>
</template>

<script setup lang="ts">
import { useMainStore } from '@/stores/main'

import type { TToolType } from '@/data/interfaces'

import ContentButton from './ContentButton.vue'
import ContentHeadline from './ContentHeadline.vue'
import ContentImage from './ContentImage.vue'
import ContentText from './ContentText.vue'

const mainStore = useMainStore()

function getComponent(type: TToolType) {
  switch (type) {
    case 'button':
      return ContentButton
    case 'h2':
      return ContentHeadline
    case 'img':
      return ContentImage
    case 'p':
      return ContentText
  }
}
</script>

<style scoped></style>
