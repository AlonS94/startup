import path from 'path';

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, 'src') },
      { find: 'common', replacement: path.resolve(__dirname, 'src/common') },
      { find: 'components', replacement: path.resolve(__dirname, 'src/components') },
      { find: 'modules', replacement: path.resolve(__dirname, 'src/modules') },
      { find: 'store', replacement: path.resolve(__dirname, 'src/store') },
      { find: 'utils', replacement: path.resolve(__dirname, 'src/utils') },
      { find: 'types', replacement: path.resolve(__dirname, 'src/types') },
    ],
  },
  build: {
    outDir: 'build',
    emptyOutDir: true,
    sourcemap: false,
  },
});
