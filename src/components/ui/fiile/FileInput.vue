<template>
  <div>
    <Input type="file" ref="inpRef" @change="fileUpdate" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Input from '../input/Input.vue'

const emits = defineEmits(['update:modelValue'])

const inpRef = ref(null)

function fileUpdate(event: any) {
  const file = event.target.files[0]

  if (file) {
    const reader = new FileReader()

    reader.onload = function (e) {
      const res = e.target?.result || ''

      emits('update:modelValue', res)
    }

    reader.readAsDataURL(file)
  } else emits('update:modelValue', '')
}
</script>

<style scoped></style>
