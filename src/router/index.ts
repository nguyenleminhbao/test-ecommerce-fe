import { createRouter, createWebHistory } from 'vue-router'
import {
  CartView,
  HomeView,
  LivestreamView,
  MyAccountView,
  MyShopView,
  ProductDetailView,
  ProductView,
  NewsView,
  BlogDetailView,
  ReelDetailView,
  ShopDetailView
} from '@/views/Client'

import {
  DashboardAdmin,
  ProductAdmin,
  ProductDetailAdmin,
  OrderAdmin,
  OrderDetailAdmin,
  CustomerAdmin,
  CustomerDetailAdmin,
  ShopAdmin,
  ShopDetailAdmin,
  ReelAdmin,
  ReelDetailAdmin,
  FeedAdmin,
  FeedDetailAdmin,
  SettingAdmin
} from '@/views/Admin'
import ForbiddenView from '@/views/ForbiddenView.vue'
import NotFoundView from '@/views/NotFoundView.vue'

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
    component: HomeView
  },
  {
    path: '/product',
    name: 'product',
    meta: {
      layout: LAYOUT_ENUM.DEFAULT_LAYOUT
    },
    component: ProductView
  },
  {
    path: '/product/:productId',
    name: 'product detail',
    meta: {
      layout: LAYOUT_ENUM.DEFAULT_LAYOUT
    },
    component: ProductDetailView
  },
  {
    path: '/news',
    name: 'news',
    meta: {
      layout: LAYOUT_ENUM.DEFAULT_LAYOUT
    },
    component: NewsView
  },
  {
    path: '/blog/:blogId',
    name: 'blog detail',
    meta: {
      layout: LAYOUT_ENUM.DEFAULT_LAYOUT
    },
    component: BlogDetailView
  },
  {
    path: '/reel/:reelId',
    name: 'reel detail',
    meta: {
      layout: LAYOUT_ENUM.AUTH_LAYOUT
    },
    component: ReelDetailView
  },
  {
    path: '/cart',
    name: 'cart',
    meta: {
      layout: LAYOUT_ENUM.DEFAULT_LAYOUT
    },
    component: CartView
  },
  {
    path: '/my-shop',
    name: 'my shop',
    meta: {
      layout: LAYOUT_ENUM.DEFAULT_LAYOUT
    },
    component: MyShopView
  },
  {
    path: '/livestream',
    name: 'livestream',
    meta: {
      layout: LAYOUT_ENUM.DEFAULT_LAYOUT
    },
    component: LivestreamView
  },
  {
    path: '/my-account',
    name: 'my-account',
    meta: {
      layout: LAYOUT_ENUM.DEFAULT_LAYOUT
    },
    component: MyAccountView
  },
  {
    path: '/shop/:shopId',
    name: 'shop detail',
    meta: {
      layout: LAYOUT_ENUM.DEFAULT_LAYOUT
    },

    component: ShopDetailView
  },
  {
    path: '/forbidden',
    name: 'forbidden',
    meta: {
      layout: LAYOUT_ENUM.AUTH_LAYOUT
    },
    component: ForbiddenView
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
        component: DashboardAdmin
      },
      {
        path: '/admin/product',
        name: 'product admin',
        component: ProductAdmin
      },
      {
        path: '/admin/product/:productId',
        name: 'product detail admin',
        component: ProductDetailAdmin
      },
      {
        path: '/admin/order',
        name: 'order admin',
        component: OrderAdmin
      },
      {
        path: '/admin/order/:orderId',
        name: 'order detail admin',
        component: OrderDetailAdmin
      },
      {
        path: '/admin/customer',
        name: 'customer admin',
        component: CustomerAdmin
      },
      {
        path: '/admin/customer/:customerId',
        name: 'customer detail admin',
        component: CustomerDetailAdmin
      },
      {
        path: '/admin/shop',
        name: 'shop admin',
        component: ShopAdmin
      },
      {
        path: '/admin/shop/:shopId',
        name: 'shop detail admin',
        component: ShopDetailAdmin
      },
      {
        path: '/admin/reel',
        name: 'reel admin',
        component: ReelAdmin
      },
      {
        path: '/admin/reel/:reelId',
        name: 'reel detail admin',
        component: ReelDetailAdmin
      },
      {
        path: '/admin/feed',
        name: 'feed admin',
        component: FeedAdmin
      },
      {
        path: '/admin/feed/:feedId',
        name: 'feed detail admin',
        component: FeedDetailAdmin
      },
      {
        path: '/admin/setting',
        name: 'setting admin',
        component: SettingAdmin
      }
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFoundView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes
})

export default router
