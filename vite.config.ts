import path from "path";
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "index.html"),
        // Main HTML file
        about: path.resolve(__dirname, "about.html"),
        // Added about.html file
        service: path.resolve(__dirname, "service.html"),
        // Added service.html file
        why: path.resolve(__dirname, "why.html"),
        // Added why.html file
        team: path.resolve(__dirname, "team.html"),
        // Added team.html file
      },
    },
  },
});
