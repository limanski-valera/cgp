import type { ITool } from '@/data/interfaces'

import { computed, ref } from 'vue'
import { defineStore } from 'pinia'

import { tools } from '@/data/constants'

export const useMainStore = defineStore('main', () => {
  const content = ref<ITool[]>([])

  const notEmptyBlocks = computed(() => content.value.filter((block) => block.content.length))

  function addBlock(type: string, position?: number) {
    const block = tools.find((tool) => tool.type === type)

    if (!block) return

    const newBlock = { ...block, id: Date.now() }

    if (!position) {
      content.value.push(newBlock)
    } else {
      content.value.splice(position, 0, newBlock)
    }
  }

  function updateBlockContent(id: number, newContent: string) {
    const block = content.value.find((item) => item.id === id)

    if (!block) return

    block.content = newContent
  }

  function deleteBlock(id: number) {
    content.value = content.value.filter((block) => block.id !== id)
  }

  function copyBlock(id: number) {
    const block = content.value.find((block) => block.id === id)

    if (!block) return

    const copiedBlock = { ...block, id: Date.now() }

    content.value.push(copiedBlock)
  }

  function moveBlockToDown(id: number) {
    const blockIndex = content.value.findIndex((block) => block.id === id)

    if (blockIndex === -1 || blockIndex === content.value.length) return

    const block = content.value.splice(blockIndex, 1)

    content.value.splice(blockIndex + 1, 0, block[0])
  }

  function moveBlockToUp(id: number) {
    const blockIndex = content.value.findIndex((block) => block.id === id)

    if (blockIndex === -1 || blockIndex === 0) return

    const block = content.value.splice(blockIndex, 1)

    content.value.splice(blockIndex - 1, 0, block[0])
  }

  function moveBlock(id: number, directiion: 'up' | 'down') {
    directiion === 'down' ? moveBlockToDown(id) : moveBlockToUp(id)
  }

  return { content, notEmptyBlocks, addBlock, updateBlockContent, deleteBlock, copyBlock, moveBlock }
})
