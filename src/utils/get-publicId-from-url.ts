// export const getPublicIdFromUrl = (url: string) => {
//   const regex = /\/image\/upload\/v\d+\/(.+?)\.(jpg|jpeg|png|gif|bmp)/i
//   const match = url.match(regex)
//   if (match) {
//     return match[1]
//   }
//   return 'ecommerce/no'
// }

export const getPublicIdFromUrl = (url: string) => {
  const regex = /https:\/\/storage\.googleapis\.com\/([^/]+)\/e-commerce\/(.*)/
  const match = url.match(regex)
  return match ? 'e-commerce/' + match[2] : 'ecommerce/no'
}
