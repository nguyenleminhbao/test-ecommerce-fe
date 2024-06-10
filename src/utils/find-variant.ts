import type { IOption, IVariant } from '@/interfaces/product.interface'

export const findVariant = (options: IOption[], variants: IVariant[], optionFind: number[]) => {
  const arr_options = options?.map((ele, idx) => {
    return ele?.values?.length
  })

  let position = 0

  for (let i = 0; i < optionFind.length; i++) {
    let distance = 1
    for (let j = i + 1; j < optionFind.length; j++) {
      distance *= arr_options[j]
    }
    if (i == optionFind.length - 1) position += optionFind[i]
    else position += (optionFind[i] - 1) * distance
  }

  return variants?.find((ele) => ele?.position == position + 1) as IVariant
}
