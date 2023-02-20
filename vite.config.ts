import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import externalGlobals from 'rollup-plugin-external-globals'
import VueMacros from 'unplugin-vue-macros/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import {NaiveUiResolver} from 'unplugin-vue-components/resolvers'

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
    // https://github.com/antfu/unplugin-auto-import
    AutoImport({
      imports: [
        'vue',
        'vue-router',
        'vue/macros',
      ],
      dts: 'src/auto-imports.d.ts',
      dirs: [
        'src/composables',
        'src/stores',
      ],
      vueTemplate: true,
    }),
    // https://github.com/antfu/unplugin-vue-components
    Components({
      resolvers: [NaiveUiResolver()],
      // allow auto load markdown components under `./src/components/`
      extensions: ['vue', 'md'],
      // allow auto import and register components used in markdown
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      dts: true,
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
