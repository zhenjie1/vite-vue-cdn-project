import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import externalGlobals from 'rollup-plugin-external-globals'
import VueMacros from 'unplugin-vue-macros/vite'

const externals = {
  'vue': 'Vue',
  'vue-router': 'VueRouter',
  'pinia': 'Pinia',
  'naive-ui': 'naive',
  'axios': 'axios',
  'vue-request': 'VueRequest',
}
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    VueMacros({
      plugins: {
        vue: Vue({
          include: [/\.vue$/, /\.md$/],
          reactivityTransform: true,
        }),
      },
    }),

  
  ],

  build: {
    rollupOptions: {
      external: Object.keys(externals),
      plugins: [
        externalGlobals(externals),
      ],
    },
  },
})
