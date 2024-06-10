<template>
  <div>
    <Row :gutter="16">
      <Col :span="6">
        <Card>
          <Statistic
            title="Success"
            :value="success"
            :value-style="{ color: '#3f8600' }"
            style="margin-right: 50px"
          />
        </Card>
      </Col>
      <Col :span="6">
        <Card>
          <Statistic title="Failed" :value="failed" :value-style="{ color: '#cf1322' }" />
        </Card>
      </Col>
      <Col :span="6">
        <Card>
          <Statistic title="Total" :value="total" />
        </Card>
      </Col>
      <Col :span="6">
        <Card>
          <Statistic title="Pending" :value="pending" />
        </Card>
      </Col>
    </Row>
  </div>
</template>

<script lang="ts" setup>
import { Row, Col, Card, Statistic } from 'ant-design-vue'

const { success, failed, pending, total } = defineProps<{
  success: number
  failed: number
  pending: number
  total: number
}>()
</script>
