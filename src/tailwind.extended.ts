
import type { Config } from 'tailwindcss';

export const tailwindExtended: Partial<Config> = {
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#f5f7fa',
          100: '#e4e9f2',
          200: '#cbd3e5',
          300: '#a8b8d8',
          400: '#8094c8',
          500: '#6275b3',
          600: '#4c5d99',
          700: '#3e4a7c',
          800: '#354067',
          900: '#2d3455',
        },
        gold: {
          50: '#fefbea',
          100: '#fcf6c8',
          200: '#faeb8c',
          300: '#f8d748',
          400: '#f7cf1d',
          500: '#e6ba12',
          600: '#c08e0b',
          700: '#96640c',
          800: '#7b5010',
          900: '#674313',
        }
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        opensans: ['Open Sans', 'sans-serif'],
      }
    },
  },
};
