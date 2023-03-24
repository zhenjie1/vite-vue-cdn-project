// vite.config.ts
import { defineConfig } from "file:///Users/czw/Documents/yanfa/test/my-vue-cdn/node_modules/.pnpm/registry.npmmirror.com+vite@4.1.2_sass@1.58.3/node_modules/vite/dist/node/index.js";
import Vue from "file:///Users/czw/Documents/yanfa/test/my-vue-cdn/node_modules/.pnpm/registry.npmmirror.com+@vitejs+plugin-vue@4.0.0_vite@4.1.2+vue@3.2.47/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import externalGlobals from "file:///Users/czw/Documents/yanfa/test/my-vue-cdn/node_modules/.pnpm/registry.npmmirror.com+rollup-plugin-external-globals@0.7.1/node_modules/rollup-plugin-external-globals/index.js";
import VueMacros from "file:///Users/czw/Documents/yanfa/test/my-vue-cdn/node_modules/.pnpm/registry.npmmirror.com+unplugin-vue-macros@1.8.2_vite@4.1.2+vue@3.2.47/node_modules/unplugin-vue-macros/dist/vite.mjs";
import AutoImport from "file:///Users/czw/Documents/yanfa/test/my-vue-cdn/node_modules/.pnpm/registry.npmmirror.com+unplugin-auto-import@0.14.3/node_modules/unplugin-auto-import/dist/vite.js";
import Components from "file:///Users/czw/Documents/yanfa/test/my-vue-cdn/node_modules/.pnpm/registry.npmmirror.com+unplugin-vue-components@0.24.0_vue@3.2.47/node_modules/unplugin-vue-components/dist/vite.mjs";
import Unocss from "file:///Users/czw/Documents/yanfa/test/my-vue-cdn/node_modules/.pnpm/registry.npmmirror.com+unocss@0.49.7_vite@4.1.2/node_modules/unocss/dist/vite.mjs";
import Pages from "file:///Users/czw/Documents/yanfa/test/my-vue-cdn/node_modules/.pnpm/registry.npmmirror.com+vite-plugin-pages@0.28.0_vite@4.1.2/node_modules/vite-plugin-pages/dist/index.mjs";
import Layouts from "file:///Users/czw/Documents/yanfa/test/my-vue-cdn/node_modules/.pnpm/registry.npmmirror.com+vite-plugin-vue-layouts@0.8.0_odivvtajfxy4ncwzzxzazp6cke/node_modules/vite-plugin-vue-layouts/dist/index.mjs";
import { visualizer } from "file:///Users/czw/Documents/yanfa/test/my-vue-cdn/node_modules/.pnpm/registry.npmmirror.com+rollup-plugin-visualizer@5.9.0/node_modules/rollup-plugin-visualizer/dist/plugin/index.js";
var externals = {
  "vue": "Vue",
  "vue-router": "VueRouter",
  "pinia": "Pinia",
  "ant-design-vue": "antd",
  "axios": "axios",
  "dayjs": "dayjs",
  "naive-ui": "naive",
  "vue-request": "VueRequest"
};
var vite_config_default = defineConfig((options) => {
  return {
    base: "./",
    plugins: [
      VueMacros({
        plugins: {
          vue: Vue({
            include: [/\.vue$/],
            reactivityTransform: true
          })
        }
      }),
      // https://github.com/hannoeru/vite-plugin-pages
      Pages({
        extensions: ["vue"]
      }),
      // https://github.com/JohnCampionJr/vite-plugin-vue-layouts
      Layouts(),
      // https://github.com/antfu/unplugin-auto-import
      AutoImport({
        imports: [
          "vue",
          "vue/macros",
          "vue-router"
        ],
        dts: "src/auto-imports.d.ts",
        dirs: [
          "src/composables",
          "src/stores"
        ]
        // vueTemplate: true,
      }),
      // https://github.com/antfu/unplugin-vue-components
      Components({
        // resolvers: [NaiveUiResolver()],
        // allow auto load markdown components under `./src/components/`
        extensions: ["vue"],
        // allow auto import and register components used in markdown
        include: [/\.vue$/, /\.vue\?vue/],
        dts: true
      }),
      Unocss(),
      visualizer()
    ],
    build: {
      outDir: `dist_${options.mode}`,
      rollupOptions: {
        external: Object.keys(externals),
        plugins: [
          externalGlobals(externals)
        ]
      }
    }
  };
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvY3p3L0RvY3VtZW50cy95YW5mYS90ZXN0L215LXZ1ZS1jZG5cIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy9jencvRG9jdW1lbnRzL3lhbmZhL3Rlc3QvbXktdnVlLWNkbi92aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMvY3p3L0RvY3VtZW50cy95YW5mYS90ZXN0L215LXZ1ZS1jZG4vdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xuaW1wb3J0IFZ1ZSBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUnXG5pbXBvcnQgZXh0ZXJuYWxHbG9iYWxzIGZyb20gJ3JvbGx1cC1wbHVnaW4tZXh0ZXJuYWwtZ2xvYmFscydcbmltcG9ydCBWdWVNYWNyb3MgZnJvbSAndW5wbHVnaW4tdnVlLW1hY3Jvcy92aXRlJ1xuaW1wb3J0IEF1dG9JbXBvcnQgZnJvbSAndW5wbHVnaW4tYXV0by1pbXBvcnQvdml0ZSdcbmltcG9ydCBDb21wb25lbnRzIGZyb20gJ3VucGx1Z2luLXZ1ZS1jb21wb25lbnRzL3ZpdGUnXG5pbXBvcnQgVW5vY3NzIGZyb20gJ3Vub2Nzcy92aXRlJ1xuaW1wb3J0IFBhZ2VzIGZyb20gJ3ZpdGUtcGx1Z2luLXBhZ2VzJ1xuaW1wb3J0IExheW91dHMgZnJvbSAndml0ZS1wbHVnaW4tdnVlLWxheW91dHMnXG5pbXBvcnQgeyB2aXN1YWxpemVyIH0gZnJvbSAncm9sbHVwLXBsdWdpbi12aXN1YWxpemVyJ1xuXG5jb25zdCBleHRlcm5hbHMgPSB7XG4gICd2dWUnOiAnVnVlJyxcbiAgJ3Z1ZS1yb3V0ZXInOiAnVnVlUm91dGVyJyxcbiAgJ3BpbmlhJzogJ1BpbmlhJyxcbiAgJ2FudC1kZXNpZ24tdnVlJzogJ2FudGQnLFxuICAnYXhpb3MnOiAnYXhpb3MnLFxuICAnZGF5anMnOiAnZGF5anMnLFxuICAnbmFpdmUtdWknOiAnbmFpdmUnLFxuICAndnVlLXJlcXVlc3QnOiAnVnVlUmVxdWVzdCcsXG59XG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKChvcHRpb25zKSA9PiB7XG4gIHJldHVybiB7XG4gICAgYmFzZTogJy4vJyxcbiAgICBwbHVnaW5zOiBbXG4gICAgICBWdWVNYWNyb3Moe1xuICAgICAgICBwbHVnaW5zOiB7XG4gICAgICAgICAgdnVlOiBWdWUoe1xuICAgICAgICAgICAgaW5jbHVkZTogWy9cXC52dWUkL10sXG4gICAgICAgICAgICByZWFjdGl2aXR5VHJhbnNmb3JtOiB0cnVlLFxuICAgICAgICAgIH0pLFxuICAgICAgICB9LFxuICAgICAgfSksXG4gICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vaGFubm9lcnUvdml0ZS1wbHVnaW4tcGFnZXNcbiAgICAgIFBhZ2VzKHtcbiAgICAgICAgZXh0ZW5zaW9uczogWyd2dWUnXSxcbiAgICAgIH0pLFxuICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL0pvaG5DYW1waW9uSnIvdml0ZS1wbHVnaW4tdnVlLWxheW91dHNcbiAgICAgIExheW91dHMoKSxcblxuICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2FudGZ1L3VucGx1Z2luLWF1dG8taW1wb3J0XG4gICAgICBBdXRvSW1wb3J0KHtcbiAgICAgICAgaW1wb3J0czogW1xuICAgICAgICAgICd2dWUnLFxuICAgICAgICAgICd2dWUvbWFjcm9zJyxcbiAgICAgICAgICAndnVlLXJvdXRlcicsXG4gICAgICAgIF0sXG4gICAgICAgIGR0czogJ3NyYy9hdXRvLWltcG9ydHMuZC50cycsXG4gICAgICAgIGRpcnM6IFtcbiAgICAgICAgICAnc3JjL2NvbXBvc2FibGVzJyxcbiAgICAgICAgICAnc3JjL3N0b3JlcycsXG4gICAgICAgIF0sXG4gICAgICAgIC8vIHZ1ZVRlbXBsYXRlOiB0cnVlLFxuICAgICAgfSksXG4gICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vYW50ZnUvdW5wbHVnaW4tdnVlLWNvbXBvbmVudHNcbiAgICAgIENvbXBvbmVudHMoe1xuICAgICAgICAvLyByZXNvbHZlcnM6IFtOYWl2ZVVpUmVzb2x2ZXIoKV0sXG4gICAgICAgIC8vIGFsbG93IGF1dG8gbG9hZCBtYXJrZG93biBjb21wb25lbnRzIHVuZGVyIGAuL3NyYy9jb21wb25lbnRzL2BcbiAgICAgICAgZXh0ZW5zaW9uczogWyd2dWUnXSxcbiAgICAgICAgLy8gYWxsb3cgYXV0byBpbXBvcnQgYW5kIHJlZ2lzdGVyIGNvbXBvbmVudHMgdXNlZCBpbiBtYXJrZG93blxuICAgICAgICBpbmNsdWRlOiBbL1xcLnZ1ZSQvLCAvXFwudnVlXFw/dnVlL10sXG4gICAgICAgIGR0czogdHJ1ZSxcbiAgICAgIH0pLFxuXG4gICAgICBVbm9jc3MoKSxcblxuICAgICAgdmlzdWFsaXplcigpLFxuICAgIF0sXG5cbiAgICBidWlsZDoge1xuICAgICAgb3V0RGlyOiBgZGlzdF8ke29wdGlvbnMubW9kZX1gLFxuICAgICAgcm9sbHVwT3B0aW9uczoge1xuICAgICAgICBleHRlcm5hbDogT2JqZWN0LmtleXMoZXh0ZXJuYWxzKSxcbiAgICAgICAgcGx1Z2luczogW1xuICAgICAgICAgIGV4dGVybmFsR2xvYmFscyhleHRlcm5hbHMpLFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICB9LFxuICB9XG59KVxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFnVCxTQUFTLG9CQUFvQjtBQUM3VSxPQUFPLFNBQVM7QUFDaEIsT0FBTyxxQkFBcUI7QUFDNUIsT0FBTyxlQUFlO0FBQ3RCLE9BQU8sZ0JBQWdCO0FBQ3ZCLE9BQU8sZ0JBQWdCO0FBQ3ZCLE9BQU8sWUFBWTtBQUNuQixPQUFPLFdBQVc7QUFDbEIsT0FBTyxhQUFhO0FBQ3BCLFNBQVMsa0JBQWtCO0FBRTNCLElBQU0sWUFBWTtBQUFBLEVBQ2hCLE9BQU87QUFBQSxFQUNQLGNBQWM7QUFBQSxFQUNkLFNBQVM7QUFBQSxFQUNULGtCQUFrQjtBQUFBLEVBQ2xCLFNBQVM7QUFBQSxFQUNULFNBQVM7QUFBQSxFQUNULFlBQVk7QUFBQSxFQUNaLGVBQWU7QUFDakI7QUFFQSxJQUFPLHNCQUFRLGFBQWEsQ0FBQyxZQUFZO0FBQ3ZDLFNBQU87QUFBQSxJQUNMLE1BQU07QUFBQSxJQUNOLFNBQVM7QUFBQSxNQUNQLFVBQVU7QUFBQSxRQUNSLFNBQVM7QUFBQSxVQUNQLEtBQUssSUFBSTtBQUFBLFlBQ1AsU0FBUyxDQUFDLFFBQVE7QUFBQSxZQUNsQixxQkFBcUI7QUFBQSxVQUN2QixDQUFDO0FBQUEsUUFDSDtBQUFBLE1BQ0YsQ0FBQztBQUFBO0FBQUEsTUFFRCxNQUFNO0FBQUEsUUFDSixZQUFZLENBQUMsS0FBSztBQUFBLE1BQ3BCLENBQUM7QUFBQTtBQUFBLE1BRUQsUUFBUTtBQUFBO0FBQUEsTUFHUixXQUFXO0FBQUEsUUFDVCxTQUFTO0FBQUEsVUFDUDtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUFBLFFBQ0EsS0FBSztBQUFBLFFBQ0wsTUFBTTtBQUFBLFVBQ0o7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUFBO0FBQUEsTUFFRixDQUFDO0FBQUE7QUFBQSxNQUVELFdBQVc7QUFBQTtBQUFBO0FBQUEsUUFHVCxZQUFZLENBQUMsS0FBSztBQUFBO0FBQUEsUUFFbEIsU0FBUyxDQUFDLFVBQVUsWUFBWTtBQUFBLFFBQ2hDLEtBQUs7QUFBQSxNQUNQLENBQUM7QUFBQSxNQUVELE9BQU87QUFBQSxNQUVQLFdBQVc7QUFBQSxJQUNiO0FBQUEsSUFFQSxPQUFPO0FBQUEsTUFDTCxRQUFRLFFBQVEsUUFBUTtBQUFBLE1BQ3hCLGVBQWU7QUFBQSxRQUNiLFVBQVUsT0FBTyxLQUFLLFNBQVM7QUFBQSxRQUMvQixTQUFTO0FBQUEsVUFDUCxnQkFBZ0IsU0FBUztBQUFBLFFBQzNCO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
