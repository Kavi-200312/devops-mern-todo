import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
    server: {
    host: true,
    historyApiFallback: true,
    proxy: {
      '/api': {
        target: 'http://localhost:5005',
        changeOrigin: false,
        secure: true,
        configure: (proxy, options) => {
          proxy.on('proxyReq', (proxyReq, req, res) => {
            console.log('Proxying request:', req.method, req.url, '→', options.target + req.url);
          });
          proxy.on('proxyRes', (proxyRes, req, res) => {
            console.log('Proxy response:', proxyRes.statusCode, req.url);
          });
          proxy.on('error', (err, req, res) => {
            console.log('Proxy error:', err);
          });
        }
      },
      '/dev': {
        target: 'http://localhost:5005',
        changeOrigin: false,
        secure: true,
      }
    }
  },
})
