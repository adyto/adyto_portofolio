/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'color-palette-1': '#edf2f8',
        'color-palette-2': '#313bac',
        'color-palette-3': '#F7FBFC',
        'color-palette-4': '#071E3D',
      },
      backgroundImage: {
        bgIMG: 'url(/src/assets/bgIMG.png)',
      },
      fontFamily: {
        Rubik: ['Rubik Moonrocks', 'cursive'],
        Poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
