import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  base: "/Glowing-Skincare/",   // ← add this line to deploy project using github pages
});