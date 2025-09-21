/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      // Anda bisa menambahkan penyesuaian warna di sini.
      // Catatan: Warna oklch tidak kompatibel dengan v3.
      // Anda harus mengonversinya ke format hex atau RGB.
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};