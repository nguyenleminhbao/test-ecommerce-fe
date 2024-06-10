<template>
  <div class="flex">
    
    <button class="w-[46px] h-[40px] border-neutral-3 border-[1px] hover:bg-neutral-3">
      <FontAwesomeIcon class="text-[24px]" :icon="faTableCells" />
    </button>

    <button class="w-[46px] h-[40px] border-neutral-3 border-[1px] hover:bg-neutral-3">
      <FontAwesomeIcon class="text-[24px]" :icon="faBorderAll" />
    </button>

    <button class="w-[46px] h-[40px] border-neutral-3 border-[1px] hover:bg-neutral-3">
      <FontAwesomeIcon class="text-[24px]" :icon="faGripVertical" />
    </button>

    <button class="w-[46px] h-[40px] border-neutral-3 border-[1px] hover:bg-neutral-3">
      <FontAwesomeIcon class="text-[24px]" :icon="faGrip" />
    </button>
  </div>
</template>

<script lang="ts" setup>
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faTableCells,
  faBorderAll,
  faGripVertical,
  faGrip,
} from '@fortawesome/free-solid-svg-icons'

library.add(faTableCells, faBorderAll, faGripVertical, faGrip)
</script>
