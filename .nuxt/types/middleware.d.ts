import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = "exclude-route"
declare module "/Users/eladventures/Desktop/codes/easyjoey-v2/easyjoey-site-v2/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}