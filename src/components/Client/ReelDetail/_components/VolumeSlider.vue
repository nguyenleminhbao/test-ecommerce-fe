<template>
  <div
    ref="scrubber"
    class="relative h-2 rounded cursor-pointer select-none bg-black bg-opacity-20"
    @mousedown="scrubbing = true"
  >
    <div class="relative overflow-hidden w-full h-full rounded">
      <div
        class="relative w-full h-full bg-white rounded"
        :style="{ transform: `translateY(${(1 - value / max) * 100}%)` }"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useEventListener, useMouseInElement, useVModel } from '@vueuse/core'

const props = defineProps({
  min: { type: Number, default: 0 },
  max: { type: Number, default: 100 },
  secondary: { type: Number, default: 0 },
  modelValue: { type: Number, required: true }
})

const emit = defineEmits(['update:modelValue'])

const scrubber = ref()
const scrubbing = ref(false)
const pendingValue = ref(0)

useEventListener('mouseup', () => (scrubbing.value = false))

const value = useVModel(props, 'modelValue', emit)
const { elementY, elementHeight } = useMouseInElement(scrubber)

watch([scrubbing, elementY], () => {
  const progress = Math.max(0, Math.min(1, 1 - elementY.value / elementHeight.value))
  pendingValue.value = progress * props.max
  if (scrubbing.value) value.value = pendingValue.value
})
</script>
