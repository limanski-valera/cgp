<template>
  <div
    class="flex flex-col gap-3 items-center bg-background rounded-lg p-4 transition cursor-pointer hover:bg-[#f7faff] relative"
    :class="{ '!bg-[#D9E7FF]': isActive }"
    ref="itemRef"
    @click="isActive = true"
  >
    <WorkspaceItemToolbar
      v-if="isActive"
      @click-copy="mainStore.copyBlock(item.id)"
      @click-trash="mainStore.deleteBlock(item.id)"
      @click-top="mainStore.moveBlock(item.id, 'up')"
      @click-down="mainStore.moveBlock(item.id, 'down')"
    />
    <img :src="item.icon" :alt="item.label" width="25" height="25" />
    <h3>{{ item.label }}</h3>
    <div v-if="isActive" class="flex flex-col w-full p-1 rounded-lg bg-background shadow-lg">
      <currentFormComponent
        v-model:model-value="value"
        :type="item.type === 'img' ? 'file' : 'text'"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ITool } from '@/data/interfaces'

import { computed, ref, watch } from 'vue'

import Input from '@/components/ui/input/Input.vue'
import Textarea from '@/components/ui/textarea/Textarea.vue'
import FileInput from '@/components/ui/fiile/FileInput.vue'
import WorkspaceItemToolbar from './WorkspaceItemToolbar.vue'

import { useMainStore } from '@/stores/main'
import { onClickOutside } from '@vueuse/core'

type TProps = {
  item: ITool
}

const props = defineProps<TProps>()

const mainStore = useMainStore()

const itemRef = ref(null)
const value = ref(props.item.content)
const isActive = ref(false)

const currentFormComponent = computed(() => {
  switch (props.item.type) {
    case 'h2':
      return Input
    case 'p':
      return Textarea
    case 'button':
      return Input
    case 'img':
      return FileInput
    default:
      return Input
  }
})

onClickOutside(itemRef, () => (isActive.value ? (isActive.value = false) : null))

watch(value, (newVal) => {
  mainStore.updateBlockContent(props.item.id, newVal)
})
</script>

<style scoped></style>
