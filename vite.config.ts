import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import styleImport from 'vite-plugin-style-import';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    styleImport({
      libs: [
        {
          libraryName: '@arco-design/web-react',
          esModule: true,
          libraryNameChangeCase: 'camelCase',
          resolveStyle: (name) => `@arco-design/web-react/es/${name}/style/index`,
        },
      ],
    }),
  ],
})
