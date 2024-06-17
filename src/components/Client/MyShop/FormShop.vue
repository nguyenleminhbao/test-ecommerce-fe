<template>
  <div class="my-20 flex flex-col">
    <h1 class="text-headline-3 text-center">Sales registration</h1>
    <Form
      :model="formState"
      :rules="rules"
      layout="vertical"
      name="registration"
      autocomplete="off"
      class="my-20 grid grid-cols-2 gap-16"
      :validate-messages="validateMessages"
    >
      <div class="flex flex-col gap-6">
        <!-- Shop Information -------------------------------------------------------->
        <div class="formItem">
          <h1 class="text-headline-7 mb-6">Shop Information</h1>
          <div class="flex gap-6">
            <FormItem label="Logo" name="logo">
              <Upload
                v-model:file-list="fileList"
                name="avatar"
                list-type="picture-card"
                class="avatar-uploader"
                :show-upload-list="false"
                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                :before-upload="beforeUpload"
                @change="handleChange"
              >
                <img v-if="imageUrl" :src="imageUrl" alt="avatar" />
                <div v-else>
                  <LoadingOutlined v-if="loading"></LoadingOutlined>
                  <PlusOutlined v-else></PlusOutlined>
                  <div class="ant-upload-text">Upload</div>
                </div>
              </Upload>
            </FormItem>

            <div class="w-full">
              <FormItem label="Name Shop" name="name">
                <Input v-model:value="formState.name" />
              </FormItem>

              <FormItem label="Email" name="email">
                <Input v-model:value="formState.email" />
              </FormItem>

              <FormItem label="Description" name="desc">
                <Textarea
                  v-model:value="formState.desc"
                  :rows="4"
                  placeholder="Write more information about the shop"
                />
              </FormItem>
            </div>
          </div>
        </div>

        <!-- Shop Address -------------------------------------------------------->
        <div class="formItem">
          <h1 class="text-headline-7 mb-6">Shop Address</h1>
          <div class="flex justify-between gap-6">
            <FormItem label="Name" name="user">
              <Input v-model:value="formState.user" />
            </FormItem>

            <FormItem label="Phone" name="phone">
              <Input v-model:value="formState.phone" />
            </FormItem>
          </div>

          <FormItem label="Address" name="add">
            <Input v-model:value="formState.add" />
          </FormItem>

          <!-- <FormItem name="default">
            <Checkbox v-model:checked="formState.default">Set shipping address</Checkbox>
          </FormItem> -->
        </div>
      </div>

      <div class="flex flex-col gap-6">
        <!-- Shop Banking -------------------------------------------------------->
        <div class="formItem">
          <h1 class="text-headline-7 mb-6">Shop Banking</h1>
          <FormItem label="Name" name="nameBank">
            <Input v-model:value="formState.nameBank" />
          </FormItem>

          <FormItem label="Primary account number" name="pan">
            <Input v-model:value="formState.pan" />
          </FormItem>

          <FormItem label="Banking" name="bank">
            <Select v-model:value="formState.bank" placeholder="Please select">
              <SelectOption value="VPB">VPBank</SelectOption>
              <SelectOption value="VCB">Vietcombank</SelectOption>
              <SelectOption value="TCB">Techcombank</SelectOption>
            </Select>
          </FormItem>

          <FormItem label="Region" name="region">
            <Select v-model:value="formState.region" placeholder="Please select">
              <SelectOption value="HN">Hanoi</SelectOption>
              <SelectOption value="HCM">Hochiminh</SelectOption>
              <SelectOption value="DN">Danang</SelectOption>
            </Select>
          </FormItem>

          <FormItem
            label="Bank branch name"
            name="branch"
            :rules="[{ required: true, message: 'Please input!' }]"
          >
            <Input v-model:value="formState.branch" />
          </FormItem>
        </div>

        <FormItem>
          <Button size="large" type="primary" html-type="submit">Submit</Button>
        </FormItem>
      </div>
    </Form>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import {
  Form,
  FormItem,
  Upload,
  Input,
  Checkbox,
  Textarea,
  Select,
  SelectOption,
  Button,
  message
} from 'ant-design-vue'
import { PlusOutlined, LoadingOutlined } from '@ant-design/icons-vue'
import type { UploadChangeParam, UploadProps } from 'ant-design-vue'
import type { Rule } from 'ant-design-vue/es/form'

interface FormState {
  logo: string
  name: string
  email: string
  desc: string

  user: string
  phone: string
  add: string
  default: boolean

  nameBank: string
  pan: string
  bank: string | undefined
  region: string | undefined
  branch: string
}

const formState = reactive<FormState>({
  logo: '',
  name: '',
  email: '',
  desc: '',

  user: '',
  phone: '',
  add: '',
  default: true,

  nameBank: '',
  pan: '',
  bank: undefined,
  region: undefined,
  branch: ''
})

const rules: Record<string, Rule[]> = {
  logo: [{ required: true }],
  name: [{ required: true, trigger: 'change' }],
  email: [{ required: true, trigger: 'change', type: 'email' }],

  user: [{ required: true, trigger: 'change' }],
  phone: [{ required: true, trigger: 'change' }],
  add: [{ required: true, trigger: 'change' }],
  default: [{ required: true, message: 'Please check', trigger: 'change' }],

  nameBank: [{ required: true, trigger: 'change' }],
  pan: [{ required: true, trigger: 'change' }],
  bank: [{ required: true, trigger: 'change' }],
  region: [{ required: true, trigger: 'change' }],
  branch: [{ required: true, trigger: 'change' }]
}
const validateMessages = {
  required: 'Please input ${label}!',
  types: {
    email: '${label} is not a valid email!'
  }
}

function getBase64(img: Blob, callback: (base64Url: string) => void) {
  const reader = new FileReader()
  reader.addEventListener('load', () => callback(reader.result as string))
  reader.readAsDataURL(img)
}

const fileList = ref([])
const loading = ref<boolean>(false)
const imageUrl = ref<string>('')

const handleChange = (info: UploadChangeParam) => {
  if (info.file.status === 'uploading') {
    loading.value = true
    return
  }
  if (info.file.status === 'done') {
    // Get this url from response in real world.
    if (info.file.originFileObj)
      getBase64(info.file.originFileObj, (base64Url: string) => {
        imageUrl.value = base64Url
        loading.value = false
      })
  }
  if (info.file.status === 'error') {
    loading.value = false
    message.error('upload error')
  }
}

const beforeUpload = (file: any) => {
  //file: UploadProps['fileList'][number]
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png'
  if (!isJpgOrPng) {
    message.error('You can only upload JPG file!')
  }
  const isLt2M = file.size / 1024 / 1024 < 2
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!')
  }
  return isJpgOrPng && isLt2M
}
</script>

<style scoped>
.formItem {
  display: flex;
  flex-direction: column;
  padding: 40px 24px;
  border: 1px solid #6c7275;
  border-radius: 4px;
}

.avatar-uploader > .ant-upload {
  width: 128px;
  height: 128px;
}
.ant-upload-select-picture-card i {
  font-size: 32px;
  color: #999;
}

.ant-upload-select-picture-card .ant-upload-text {
  margin-top: 8px;
  color: #666;
}
</style>
