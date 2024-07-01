import type { Ref } from 'vue'

export const dynamicQuery = (
  list: Ref<
    {
      key: string
      value: string
    }[]
  >
) => {
  const queryObject: { [key: string]: string } = {}
  const newList = list.value.map((ele) => {
    queryObject[ele.key] = ele.value
  })
  return queryObject
}
