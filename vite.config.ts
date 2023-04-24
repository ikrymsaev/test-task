import { defineConfig, loadEnv } from 'vite'
import path from 'path'
import react from '@vitejs/plugin-react'

export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  return defineConfig({
    plugins: [react()],
    resolve: {
      alias: {
        '@/common': path.resolve(__dirname, './src/App/common'),
        '@/modules': path.resolve(__dirname, './src/App/modules'),
        '@/features': path.resolve(__dirname, './src/App/features'),
        '@/components': path.resolve(__dirname, './src/App/components'),
      }
    },
    server: {
      proxy: {
        '/server': {
          target: process.env.VITE_API_TARGET,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/server/, '')
        }
      }
    },
  })
}
