import { LAYOUT_ENUM } from '@/router'
import { defineAsyncComponent, type App } from 'vue'

export const registerLayout = (app: App<Element>) => {
  app.component(
    LAYOUT_ENUM.DEFAULT_LAYOUT,
    defineAsyncComponent(() => import('@/layouts/DefaultLayout.vue'))
  )

  app.component(
    LAYOUT_ENUM.AUTH_LAYOUT,
    defineAsyncComponent(() => import('@/layouts/AuthLayout.vue'))
  )

  app.component(
    LAYOUT_ENUM.ADMIN_LAYOUT,
    defineAsyncComponent(() => import('@/layouts/AdminLayout.vue'))
  )
}