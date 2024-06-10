<template>
  <div class="grid gap-[8px] text-caption-1-semibold text-neutral-7">
    <Checkbox
      v-model:checked="state.checkAll"
      :indeterminate="state.indeterminate"
      @change="onCheckAllChange"
    >
      All Price
    </Checkbox>
    <CheckboxGroup class="grid gap-[8px]" v-model:value="state.checkedList" :options="plainOptions" />
  </div>
</template>

<script lang="ts" setup>
import { reactive, watch } from 'vue';
import { Checkbox, CheckboxGroup } from 'ant-design-vue'
const plainOptions = ['$0.00 - 99.99', '$100.00 - 199.99', '$200.00 - 299.99', '$300.00 - 399.99', '$400.00+'];
const state = reactive({
  indeterminate: true,
  checkAll: false,
  checkedList: ['$0.00 - 99.99'],
});

const onCheckAllChange = (e: any) => {
  Object.assign(state, {
    checkedList: e.target.checked ? plainOptions : [],
    indeterminate: false,
  });
};
watch(
  () => state.checkedList,
  val => {
    state.indeterminate = !!val.length && val.length < plainOptions.length;
    state.checkAll = val.length === plainOptions.length;
  },
);
</script>