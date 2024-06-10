export const getPublicIdFromUrl = (url: string) => {
  const regex = /\/image\/upload\/v\d+\/(.+?)\.(jpg|jpeg|png|gif|bmp)/i
  const match = url.match(regex)
  if (match) {
    return match[1]
  }
  return 'ecommerce/no'
}
