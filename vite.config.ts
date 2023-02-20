import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import externalGlobals from 'rollup-plugin-external-globals'
import VueMacros from 'unplugin-vue-macros/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
import Unocss from 'unocss/vite'
import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts'
import { visualizer } from 'rollup-plugin-visualizer'

const externals = {
  'vue': 'Vue',
  'vue-router': 'VueRouter',
  'pinia': 'Pinia',
  'naive-ui': 'naive',
  'axios': 'axios',
  'vue-request': 'VueRequest',
}
// https://vitejs.dev/config/
export default defineConfig((options) => {
  return {
    base: './',
    plugins: [
      VueMacros({
        plugins: {
          vue: Vue({
            include: [/\.vue$/],
            reactivityTransform: true,
          }),
        },
      }),
      // https://github.com/hannoeru/vite-plugin-pages
      Pages({
        extensions: ['vue'],
      }),
      // https://github.com/JohnCampionJr/vite-plugin-vue-layouts
      Layouts(),

      // https://github.com/antfu/unplugin-auto-import
      AutoImport({
        imports: [
          'vue',
          'vue/macros',
          'vue-router',
        ],
        dts: 'src/auto-imports.d.ts',
        dirs: [
          'src/composables',
          'src/stores',
        ],
        // vueTemplate: true,
      }),
      // https://github.com/antfu/unplugin-vue-components
      Components({
        resolvers: [NaiveUiResolver()],
        // allow auto load markdown components under `./src/components/`
        extensions: ['vue'],
        // allow auto import and register components used in markdown
        include: [/\.vue$/, /\.vue\?vue/],
        dts: true,
      }),

      Unocss(),

      visualizer(),
    ],

    build: {
      outDir: `dist_${options.mode}`,
      rollupOptions: {
        external: Object.keys(externals),
        plugins: [
          externalGlobals(externals),
        ],
      },
    },
  }
})
