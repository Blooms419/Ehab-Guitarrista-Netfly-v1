import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { copyFileSync, mkdirSync } from "fs";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      plugins: [
        {
          name: 'copy-admin',
          generateBundle() {
            try {
              mkdirSync('dist/admin', { recursive: true });
              copyFileSync('public/admin/index.html', 'dist/admin/index.html');
              copyFileSync('public/admin/config.yml', 'dist/admin/config.yml');
            } catch (err) {
              console.log('Admin files copy skipped:', err.message);
            }
          }
        }
      ]
    }
  }
}));
