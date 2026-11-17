import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import dts from "vite-plugin-dts";
import { resolve } from "path";

export default defineConfig({
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
  plugins: [
    react(),
    tailwindcss(),
    // This plugin reads our TS files and spits out the .d.ts files for our consumers
    dts({
      insertTypesEntry: true,
      include: ["src"],
    }),
  ],
  build: {
    lib: {
      // 1. Where does the library start?
      entry: resolve(__dirname, "src/index.ts"),
      name: "GridUI",
      // 2. We compile into two formats: Modern ES Modules (mjs) and older CommonJS (cjs)
      formats: ["es", "cjs"],
      fileName: (format) => `index.${format === "es" ? "mjs" : "cjs"}`,
    },
    rollupOptions: {
      // 3. THIS IS THE MOST IMPORTANT LINE: Exclude React from our final bundle!
      external: ["react", "react-dom", "react/jsx-runtime"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});
