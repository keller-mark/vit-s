import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
    plugins: [
      react({
        jsxRuntime: 'classic',
        babel: {
          "presets": [
            "react-app"
          ],
          "plugins": [
            "glsl"
          ]
        }
      }),
    ],
    build: {
        lib: {
            entry: path.resolve(__dirname, 'src/index.js'),
            name: 'VitS',
            formats: ['es', 'umd'],
            fileName: (format) => `vit-s.${format}.js`,
        },
        rollupOptions: {
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
