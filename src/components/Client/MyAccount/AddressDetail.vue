<template>
  <div class="flex flex-col gap-[19px]">
    <h1 class="text-body-1-semibold">Address</h1>
    <div class="grid grid-cols-2 gap-[23px]">
      <AddressCard
        type="Home"
        name="Sofia Havertz"
        phone="(+1) 234 567 890"
        address="345 Long Island, NewYork, United States"
        default
        :newAdd="false"
      />

      <AddressCard
        type="Company"
        name="Sofia Hanapa"
        phone="567 890"
        address="200 SHort Island, NewYork, United States"
        :default="false"
        :newAdd="false"
      />
      <AddressCard :newAdd="true" />
    </div>
  </div>
</template>

<script setup lang="ts">
import AddressCard from './_components/AddressCard.vue'
</script>
