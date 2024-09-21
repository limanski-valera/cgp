import type { ITool } from '@/data/interfaces'

import { useMainStore } from '@/stores/main'
import { ref } from 'vue'

export const useDragAndDrop = () => {
  const mainStore = useMainStore()

  const dragTool = ref<ITool | null>(null)

  function handleDragStart(tool: ITool) {
    dragTool.value = tool
  }

  function handleDragOver(event: DragEvent) {
    event.preventDefault()
  }

  function handleDrop() {
    if (dragTool.value) mainStore.addBlock(dragTool.value?.type)

    dragTool.value = null
  }

  function handleDragEnd() {
    dragTool.value = null
  }

  return { handleDragStart, handleDragOver, handleDrop, handleDragEnd }
}
