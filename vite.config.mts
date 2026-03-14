import { defineConfig } from 'vite';

export default defineConfig({
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
