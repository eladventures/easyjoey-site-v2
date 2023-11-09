import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "default"
declare module "/Users/eladventures/Desktop/codes/easyjoey-v2/easyjoey-site-v2/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}