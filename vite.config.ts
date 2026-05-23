import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

const port = Number(process.env.PORT) || 5173;
const basePath = process.env.BASE_PATH || "/";

export default defineConfig({
  base: basePath,
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: [
      { find: "@/components/ui", replacement: path.resolve(import.meta.dirname) },
      { find: "@/components/layout", replacement: path.resolve(import.meta.dirname) },
      { find: "@/components/seo", replacement: path.resolve(import.meta.dirname) },
      { find: "@/components/tester", replacement: path.resolve(import.meta.dirname) },
      { find: "@/components", replacement: path.resolve(import.meta.dirname) },
      { find: "@/pages/legal", replacement: path.resolve(import.meta.dirname) },
      { find: "@/pages/controller", replacement: path.resolve(import.meta.dirname) },
      { find: "@/pages", replacement: path.resolve(import.meta.dirname) },
      { find: "@/hooks", replacement: path.resolve(import.meta.dirname) },
      { find: "@/lib", replacement: path.resolve(import.meta.dirname) },
      { find: "@", replacement: path.resolve(import.meta.dirname) },
      { find: "@assets", replacement: path.resolve(import.meta.dirname, "attached_assets") },
    ],
    dedupe: ["react", "react-dom"],
  },
  root: path.resolve(import.meta.dirname),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true,
  },
  server: {
    port,
    strictPort: true,
    host: "0.0.0.0",
    allowedHosts: true,
    historyApiFallback: true,
    fs: {
      strict: false,
    },
  },
  preview: {
    port,
    host: "0.0.0.0",
    allowedHosts: true,
  },
});
