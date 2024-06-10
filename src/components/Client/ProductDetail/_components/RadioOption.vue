<template>
  <div class="flex flex-col mt-6">
    <span class="text-body-1-semibold text-neutral-4">{{ option.name }}</span>
    <RadioGroup
      v-model:value="value"
      button-style="solid"
      class="flex flex-wrap gap-2 mt-3 [&_.ant-radio-button-wrapper-checked]:!bg-sky-500"
    >
      <OptionItem v-for="title in option.values" :title="title" />
    </RadioGroup>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { RadioGroup } from 'ant-design-vue'
import OptionItem from './OptionItem.vue'
import type { IOption } from '@/interfaces/product.interface'
import { useRoute } from 'vue-router'

const { option } = defineProps<{
  option: IOption
}>()
const route = useRoute()

const emit = defineEmits(['options'])
const value = ref(route.query[option.name] ?? option.values[0])

watch(value, () => {
  emit('options', {
    key: option.name,
    value: value.value,
    position: option.values.findIndex((ele) => ele == value.value) + 1
  })
})
</script>
