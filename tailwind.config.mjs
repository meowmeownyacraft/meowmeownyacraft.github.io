/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      backgroundImage: {
        main: "url('/screenshot-home.png')",
        tree: "url('/screenshot-tree.png')",
      },
    },
  },
  plugins: [],
};
