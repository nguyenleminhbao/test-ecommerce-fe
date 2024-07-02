<template>
  <div class="md:col-span-6 flex flex-col gap-6">
    <ContactInfor :form="form" />
    <PaymentMethod :form="form" />
  </div>
</template>

<script setup lang="ts">
import { ContactInfor, PaymentMethod } from './_components'
import type { FormOrderType } from './ClientCart.vue'

const { form } = defineProps<{
  form: FormOrderType
}>()
</script>
