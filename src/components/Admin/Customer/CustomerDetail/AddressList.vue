<template>
  <div class="text-body-2 flex flex-col">
    <div class="flex items-center gap-2">
      <span class="text-body-1-semibold">Thomas Lean</span>

      <Button type="primary" size="small" ghost class="flex items-center">
        <template #icon>
          <CheckOutlined />
        </template>
        Default
      </Button>
    </div>
    <span>090 *** ****</span>
    <span
      >Tầng 9 Tòa nhà E. Town 3, 364 Cộng Hòa, Quận Tân Bình, Phường 13, TP Hồ Chí Minh, Phường 13,
      Tân Bình, Thành phố Hồ Chí Minh
    </span>
  </div>

  <hr />

  <div class="text-body-2 flex flex-col">
    <span class="text-body-1-semibold">Thomas Lean</span>
    <span>090 *** ****</span>
    <span>Tầng 9 Tòa nhà E. Town 3 </span>
  </div>
</template>

<script setup lang="ts">
import { Button } from 'ant-design-vue'
import { CheckOutlined } from '@ant-design/icons-vue'
</script>
