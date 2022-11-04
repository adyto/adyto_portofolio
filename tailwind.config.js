/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'color-palette-1': '#edf2f8',
        'color-palette-2': '#313bac',
      },
      backgroundImage: {
        bgIMG: 'url(/src/assets/bgIMG.png)',
      },
    },
  },
  plugins: [],
};
