import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import externalGlobals from 'rollup-plugin-external-globals'

const externals = {
  'vue': 'Vue',
  'vue-router': 'VueRouter',
  'pinia': 'Pinia',
  'naive-ui': 'naive',
  'vue-request': 'VueRequest',
}
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  
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
