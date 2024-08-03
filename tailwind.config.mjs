/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      backgroundImage: {
        main: "url('/walls/screenshot-home.png')",
        tree: "url('/walls/screenshot-tree.png')",
        about: "url('/walls/screenshot-about.png')",
        brick: "url('/walls/polished_blackstone_bricks.png')",
      },
    },
  },
  plugins: [],
};
