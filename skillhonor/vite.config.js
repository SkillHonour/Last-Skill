import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/", // ✅ required for custom domain (skillhonour.com)
  build: {
    outDir: "dist", // where build files go
  },
  server: {
    port: 5173, // optional, for local dev
    open: true, // auto-open in browser on npm run dev
  },
});
