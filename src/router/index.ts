import { createRouter, createWebHistory } from 'vue-router'
// import {
//   CartView,
//   HomeView,
//   LivestreamView,
//   MyAccountView,
//   MyShopView,
//   ProductDetailView,
//   ProductView,
//   NewsView,
//   BlogDetailView,
//   ReelDetailView,
//   ShopDetailView
// } from '@/views/Client'

// import {
//   DashboardAdmin,
//   ProductAdmin,
//   ProductDetailAdmin,
//   OrderAdmin,
//   OrderDetailAdmin,
//   CustomerAdmin,
//   CustomerDetailAdmin,
//   ShopAdmin,
//   ShopDetailAdmin,
//   ReelAdmin,
//   ReelDetailAdmin,
//   FeedAdmin,
//   FeedDetailAdmin,
//   SettingAdmin
// } from '@/views/Admin'
// import ForbiddenView from '@/views/ForbiddenView.vue'
// import NotFoundView from '@/views/NotFoundView.vue'

export enum LAYOUT_ENUM {
  DEFAULT_LAYOUT = 'default-layout',
  AUTH_LAYOUT = 'auth-layout',
  ADMIN_LAYOUT = 'admin-layout'
}

const routes = [
  {
    path: '/',
    name: 'home',
    meta: {
      layout: LAYOUT_ENUM.DEFAULT_LAYOUT
    },
    component: () => import('@/views/Client/HomeView.vue')
  },
  {
    path: '/product',
    name: 'product',
    meta: {
      layout: LAYOUT_ENUM.DEFAULT_LAYOUT
    },
    component: () => import('@/views/Client/ProductView.vue')
  },
  {
    path: '/product/:productId',
    name: 'product detail',
    meta: {
      layout: LAYOUT_ENUM.DEFAULT_LAYOUT
    },
    component: () => import('@/views/Client/ProductDetailView.vue')
  },
  {
    path: '/news',
    name: 'news',
    meta: {
      layout: LAYOUT_ENUM.DEFAULT_LAYOUT
    },
    component: () => import('@/views/Client/NewsView.vue')
  },
  {
    path: '/blog/:blogId',
    name: 'blog detail',
    meta: {
      layout: LAYOUT_ENUM.DEFAULT_LAYOUT
    },
    component: () => import('@/views/Client/BlogDetailView.vue')
  },
  {
    path: '/reel/:reelId',
    name: 'reel detail',
    meta: {
      layout: LAYOUT_ENUM.AUTH_LAYOUT
    },
    component: () => import('@/views/Client/ReelDetailView.vue')
  },
  {
    path: '/cart',
    name: 'cart',
    meta: {
      layout: LAYOUT_ENUM.DEFAULT_LAYOUT
    },
    component: () => import('@/views/Client/CartView.vue')
  },
  {
    path: '/my-shop',
    name: 'my shop',
    meta: {
      layout: LAYOUT_ENUM.DEFAULT_LAYOUT
    },
    component: () => import('@/views/Client/MyShopView.vue')
  },
  {
    path: '/livestream',
    name: 'livestream',
    meta: {
      layout: LAYOUT_ENUM.DEFAULT_LAYOUT
    },
    component: () => import('@/views/Client/LivestreamView.vue')
  },
  {
    path: '/my-account',
    name: 'my-account',
    meta: {
      layout: LAYOUT_ENUM.DEFAULT_LAYOUT
    },
    component: () => import('@/views/Client/MyAccountView.vue')
  },
  {
    path: '/shop/:shopId',
    name: 'shop detail',
    meta: {
      layout: LAYOUT_ENUM.DEFAULT_LAYOUT
    },

    component: () => import('@/views/Client/ShopDetailView.vue')
  },
  {
    path: '/forbidden',
    name: 'forbidden',
    meta: {
      layout: LAYOUT_ENUM.AUTH_LAYOUT
    },
    component: () => import('@/views/ForbiddenView.vue')
  },
  {
    path: '/admin',
    meta: {
      layout: LAYOUT_ENUM.ADMIN_LAYOUT
    },
    children: [
      {
        path: '',
        name: 'dashboard admin',
        component: () => import('@/views/Admin/DashboardAdmin.vue')
      },
      {
        path: '/admin/product',
        name: 'product admin',
        component: () => import('@/views/Admin/ProductAdmin.vue')
      },
      {
        path: '/admin/product/:productId',
        name: 'product detail admin',
        component: () => import('@/views/Admin/ProductDetailAdmin.vue')
      },
      {
        path: '/admin/order',
        name: 'order admin',
        component: () => import('@/views/Admin/OrderAdmin.vue')
      },
      {
        path: '/admin/order/:orderId',
        name: 'order detail admin',
        component: () => import('@/views/Admin/OrderDetailAdmin.vue')
      },
      {
        path: '/admin/customer',
        name: 'customer admin',
        component: () => import('@/views/Admin/CustomerAdmin.vue')
      },
      {
        path: '/admin/customer/:customerId',
        name: 'customer detail admin',
        component: () => import('@/views/Admin/CustomerDetailAdmin.vue')
      },
      {
        path: '/admin/shop',
        name: 'shop admin',
        component: () => import('@/views/Admin/ShopAdmin.vue')
      },
      {
        path: '/admin/shop/:shopId',
        name: 'shop detail admin',
        component: () => import('@/views/Admin/ShopDetailAdmin.vue')
      },
      {
        path: '/admin/reel',
        name: 'reel admin',
        component: () => import('@/views/Admin/ReelAdmin.vue')
      },
      {
        path: '/admin/reel/:reelId',
        name: 'reel detail admin',
        component: () => import('@/views/Admin/ReelDetailAdmin.vue')
      },
      {
        path: '/admin/feed',
        name: 'feed admin',
        component: () => import('@/views/Admin/FeedAdmin.vue')
      },
      {
        path: '/admin/feed/:feedId',
        name: 'feed detail admin',
        component: () => import('@/views/Admin/FeedDetailAdmin.vue')
      },
      {
        path: '/admin/setting',
        name: 'setting admin',
        component: () => import('@/views/Admin/SettingAdmin.vue')
      }
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/views/NotFoundView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes
})

export default router
