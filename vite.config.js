import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          react: ["react", "react-dom"],
          router: ["react-router-dom"],
          gsap: ["gsap", "@gsap/react"],
          swiper: ["swiper"],
          icons: ["lucide-react", "react-icons"],
        },
      },
    },
    chunkSizeWarningLimit: 1000,
    minify: "terser",
    sourcemap: true,
  },
  optimizeDeps: {
    include: ["react", "react-dom", "react-router-dom"],
  },
});
