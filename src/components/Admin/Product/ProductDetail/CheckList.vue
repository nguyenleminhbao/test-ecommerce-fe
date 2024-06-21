<template>
  <div>
    <div>
      <Checkbox
        v-model:checked="state.checkAll"
        :indeterminate="state.indeterminate"
        @change="onCheckAllChange"
      >
        All
      </Checkbox>
    </div>
    <Divider />
    <CheckboxGroup
      class="flex flex-col"
      v-model:value="state.checkedList"
      :options="plainOptions"
    />
  </div>
</template>

<script lang="ts" setup>
import { reactive, watch } from 'vue'
import { Checkbox, Divider, CheckboxGroup } from 'ant-design-vue'

const plainOptions = ['1.0⭐', '2.0⭐', '3.0⭐', '4.0⭐', '5.0⭐']
const state = reactive({
  indeterminate: false,
  checkAll: false,
  checkedList: []
})

const onCheckAllChange = (e: any) => {
  Object.assign(state, {
    checkedList: e.target.checked ? plainOptions : [],
    indeterminate: false
  })
}
watch(
  () => state.checkedList,
  (val) => {
    state.indeterminate = !!val.length && val.length < plainOptions.length
    state.checkAll = val.length === plainOptions.length
  }
)
</script>
