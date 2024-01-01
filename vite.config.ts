import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
	plugins: [sveltekit()],
  resolve: {
    alias: {
      'DRACOLoader': path.resolve('../node_modules/three/examples/jsm/loaders/DRACOLoader.js'),
    }
  }
});
