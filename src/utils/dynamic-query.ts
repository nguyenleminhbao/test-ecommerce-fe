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
<<<<<<< HEAD
  const newList = list.value.map((ele) => {
=======
  list.value.map((ele) => {
>>>>>>> 92c172cca91f09ffb91efc587d6fd276af89eec2
    queryObject[ele.key] = ele.value
  })
  return queryObject
}
