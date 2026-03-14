import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: 'src/index.ts',
      fileName: 'index',
      formats: ['es'],
    },
    outDir: 'dist',
    minify: false,
    rollupOptions: {
      external: ['@actions/core', '@actions/tool-cache'],
    },
    target: 'node24',
  },
});
