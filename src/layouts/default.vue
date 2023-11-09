<template>
  <div :data-theme="theme">
    <div class="navbar fixed bg-base-100 z-40 shadow-sm">
      <div class="navbar-start">
        
      </div>
      <div class="navbar-center hidden lg:flex items-center">
        <img src="../assets/images/easy-joey-logo-black.png" alt="Your Logo" class="h-8 w-8">
        <a class="btn btn-ghost md:text-2xl font-luciole mt-3">EasyJoey</a>
      </div>
      <div class="navbar-end">
        <!-- <select v-model="theme" class="select select-primary md:w-full md:max-w-xs">
          <option disabled selected>Select Theme</option>
          <option v-for="theme in themes" :value="theme" :key="theme">
            <span class="uppercase">{{ theme }}</span>
          </option>
        </select> -->
      </div>
    </div>
    <slot />
  </div>
</template>

<script>
import { ref, watch, onMounted } from 'vue';
const THEMES = [
  'light',
  'dark',
  'cupcake',
  'bumblebee',
  'emerald',
  'corporate',
  'synthwave',
  'retro',
  'cyberpunk',
  'valentine',
  'halloween',
  'garden',
  'forest',
  'aqua',
  'lofi',
  'pastel',
  'fantasy',
  'wireframe',
  'black',
  'luxury',
  'dracula',
  'cmyk',
  'autumn',
  'business',
  'acid',
  'lemonade',
  'night',
  'coffee',
  'winter',
];
export default {
  setup () {
    const theme = ref(null);
    watch(theme, (value) => {
      localStorage.setItem('daisyui-theme', value);
    });
    onMounted(() => {
      theme.value = localStorage.getItem('daisyui-theme') || 'dark';
    });
    return {
      theme,
      themes: THEMES,
    };
  },
};
</script>

