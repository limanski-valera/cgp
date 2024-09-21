<template>
  <div class="toolbar flex gap-2 absolute right-2 bottom-full h-7">
    <div class="toolbar__arrows flex rounded-t overflow-hidden bg-[#449CF4]">
      <button class="p-2 rounded-none transition-all hover:bg-[#3c8bda]" @click="$emit('clickTop')">
        <img :src="ArrowTopIcon" alt="" class="max-w-full" />
      </button>
      <button class="p-2 rounded-none transition-all hover:bg-[#3c8bda]" @click="$emit('clickDown')">
        <img :src="ArrowBottomIcon" alt="" class="max-w-full" />
      </button>
    </div>
    <div class="toolbar__actives bg-[#68C2E9] rounded-t flex overflow-hidden">
      <button class="w-6 flex items-center justify-center rounded bg-[#4B97B8] transition-all hover:bg-[#3f7f9b] m-1" @click="$emit('clickCopy')">
        <img :src="CopyIcon" alt="" class="w-[11px]">
      </button>
      <button class="rounded-l-none w-6 flex items-center justify-center transition-all hover:bg-[#4B97B8]" @click="$emit('clickTrash')">
        <img :src="TrashIcon" alt="" class="w-[11px]">
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import ArrowTopIcon from '@/assets/img/icons/arrow-top.svg'
import ArrowBottomIcon from '@/assets/img/icons/arrow-bottom.svg'
import CopyIcon from '@/assets/img/icons/copy.svg'
import TrashIcon from '@/assets/img/icons/trash.svg'

defineEmits(['clickDown', 'clickTop', 'clickCopy', 'clickTrash'])
</script>

<style scoped></style>
