export const configSWRV = {
  ttl: 60 * 1000, // 60 seconds in milliseconds
  revalidateOnFocus: true,
  revalidateDebounce: 500,
  dedupingInterval: 60 * 1000
}

export const configBannerSWRV = {
  ttl: 60 * 1000, // 60 seconds in milliseconds
  revalidateOnFocus: true,
  revalidateDebounce: 500,
  dedupingInterval: 120 * 1000
}
