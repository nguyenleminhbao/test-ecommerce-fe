<template>
  <div class="flex gap-[24px] py-[48px] mx-auto max-w-[1120px] justify-center">
    <Card
      data-aos="fade-left"
      data-aos-offset="500"
      data-aos-duration="500"
      :icon="CarOutlined"
      title="Free Shipping"
      description="Order above $200"
    />
    <Card
      data-aos="fade-left"
      data-aos-offset="500"
      data-aos-duration="900"
      :icon="WalletOutlined"
      title="Money-back"
      description="30 days guarantee"
    />
    <Card
      data-aos="fade-left"
      data-aos-offset="500"
      data-aos-duration="1100"
      :icon="LockOutlined"
      title="Secure Payments"
      description="Secured by Stripe"
    />
    <Card
      data-aos="fade-left"
      data-aos-offset="500"
      data-aos-duration="1200"
      :icon="PhoneOutlined"
      title="24/7 Support"
      description="Phone and Email support"
    />
  </div>
</template>

<script setup lang="ts">
import { Card } from './_components'
import { CarOutlined, WalletOutlined, LockOutlined, PhoneOutlined } from '@ant-design/icons-vue'
</script>
