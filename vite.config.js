import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { mkdirSync, copyFileSync } from "node:fs";
import { resolve } from "node:path";

function graciasIndex() {
  return {
    name: "gracias-index",
    closeBundle() {
      const dir = resolve(process.cwd(), "dist/gracias");
      mkdirSync(dir, { recursive: true });
      copyFileSync(
        resolve(process.cwd(), "dist/gracias.html"),
        resolve(dir, "index.html")
      );
    },
  };
}

export default defineConfig({
  plugins: [react(), graciasIndex()],
  base: "./",
  assetsInclude: ["**/*.JPG", "**/*.JPEG", "**/*.PNG"],
  build: {
    rollupOptions: {
      input: {
        main: "index.html",
        gracias: "gracias.html",
      },
    },
  },
});
