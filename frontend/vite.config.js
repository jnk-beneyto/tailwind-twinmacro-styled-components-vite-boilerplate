
import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import macrosPlugin from 'vite-plugin-babel-macros';

// https://vitejs.dev/config/
export default defineConfig({
  esbuild: {
    jsxInject: `
      import React from 'react';
    `,
  },
  plugins: [reactRefresh(), macrosPlugin()],
  define: {
    'process.env': {},
  },
});