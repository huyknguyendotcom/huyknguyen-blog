/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class', '[data-theme="dark"]'],
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Lexend"'],
        mono: ['"Fira Mono"'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    // ...
  ],
};
