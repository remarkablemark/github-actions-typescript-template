import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['cjs'],
  dts: false,
  minify: true,
  target: 'node24',
  outDir: 'dist',
  clean: true,
  noExternal: [/./],
});
