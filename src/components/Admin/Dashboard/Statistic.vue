<template>
  <Row :gutter="16">
    <Col :span="6">
      <Card>
        <Statistic title="Total User" :value="10243" style="margin-right: 50px" />
      </Card>
    </Col>
    <Col :span="6">
      <Card>
        <Statistic title="Total Order" :value="112893" />
      </Card>
    </Col>
    <Col :span="6">
      <Card>
        <Statistic title="Total Sales" :precision="2" :value="800000" suffix="đ" />
      </Card>
    </Col>
    <Col :span="6">
      <Card>
        <Statistic title="Total Pending" :precision="2" :value="2040" />
      </Card>
    </Col>
  </Row>
</template>

<script setup lang="ts">
import { Row, Col, Card, Statistic } from 'ant-design-vue'
</script>
