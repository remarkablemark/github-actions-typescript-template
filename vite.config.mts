import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: 'src/index.ts',
      fileName: 'index',
      formats: ['es'],
    },
    outDir: 'dist',
    minify: true,
    rollupOptions: {
      external: ['@actions/core', '@actions/tool-cache'],
    },
    target: 'node24',
  },
  test: {
    globals: true,
    environment: 'node',
    coverage: {
      thresholds: {
        100: true,
      },
    },
  },
});
