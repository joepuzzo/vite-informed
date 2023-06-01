import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { visualizer } from "rollup-plugin-visualizer";
import { createHtmlPlugin } from "vite-plugin-html";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  root: "src/client",
  plugins: [
    // createHtmlPlugin({
    //   entry: "client/main.jsx",
    //   template: "client/public/index.html",
    //   minify: true,
    // }),
    react(),
    visualizer(),
  ],
  server: {
    port: 9002,
    strictPort: true,
    hmr: {
      clientPort: 9002,
    },
  },
});
