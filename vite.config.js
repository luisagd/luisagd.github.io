import { defineConfig, transformWithEsbuild } from "vite";
import react from "@vitejs/plugin-react";
import basicSsl from "@vitejs/plugin-basic-ssl";
import Pages from "vite-plugin-pages";

const jsxInJs = {
  name: "jsx-in-js",
  enforce: "pre",
  async transform(code, id) {
    if (!id.includes("/src/") || !id.endsWith(".js")) return;

    return transformWithEsbuild(code, id, {
      loader: "jsx",
      jsx: "automatic",
      sourcemap: true,
    });
  },
};

export default defineConfig({
  base: "/",
  plugins: [
    jsxInJs,
    Pages({
      extensions: ["js", "jsx"],
      exclude: ["**/404.js"],
    }),
    react(),
    basicSsl(),
  ],
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        ".js": "jsx",
      },
    },
  },
});
