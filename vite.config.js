import react from '@vitejs/plugin-react';
import path from 'path';
import replace from 'rollup-plugin-replace';
import { defineConfig } from 'vite';

process.env.NODE_ENV = 'production';

export default defineConfig({
  plugins: [
    react({
      jsxRuntime: 'classic',
      babel: {
        presets: [
          'react-app',
        ],
        plugins: [
          'glsl',
        ],
      },
    }),
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.js'),
      name: 'VitS',
      formats: ['es', 'umd'],
      fileName: format => `vit-s.${format}.js`,
    },
    rollupOptions: {
      plugins: [
        replace({
          'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
        }),
      ],
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
});
