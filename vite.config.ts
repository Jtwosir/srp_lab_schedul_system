import {defineConfig} from 'vite'
import { resolve } from "path";
import react from '@vitejs/plugin-react'
import envConf from './src/utils/env'
import { createHtmlPlugin } from "vite-plugin-html";

// https://vitejs.dev/config/
export default defineConfig({
    // alias config
    resolve: {
      alias: {
        "@": resolve(__dirname, "./src")
      },
      extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.png']
    },
    server: {
      host: "0.0.0.0", // 服务器主机名，如果允许外部访问，可设置为"0.0.0.0"
      port: envConf.VITE_PORT,
      open: envConf.VITE_OPEN,
      cors: true,
      // https: false,
      // 代理跨域（mock 不需要配置，这里只是个事列）
      proxy: {
      }
    },
    plugins: [
        react(),
        createHtmlPlugin({
            inject: {
                data: {
                    title: envConf.VITE_GLOB_APP_TITLE
                }
            }
        }),
    ],
    optimizeDeps: {
      exclude: ['lucide-react'],
    }
})
