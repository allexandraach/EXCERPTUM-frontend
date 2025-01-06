/** @type {import('tailwindcss').Config} */

import plugin from 'tailwindcss/plugin';
import formsPlugin from '@tailwindcss/forms';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    borderRadius: {
      'none': '0',
      'sm': '0.125rem',
      'default': '0.25rem',
      'md': '0.375rem',
      'lg': '0.5rem',
      'full': '9999px',
      'large': '12px',
      'custom': '3.125rem',
    },
    extend: {
      colors: {
        navbar_bg: '#653434',
        navbar_font_color: '#fbefdf',
        primary: '#a10872',
        secondary: '#a10872',
        gray_shadow: '#a0a1a2',
        primary_hover: '#009c39',
        secondary_hover: '#df640c',
        ternary_hover: '#9c0505f0',
        gray_hover: '#848a94',
        modal_bg: '#0303032e',
      },
      fontFamily: {
        // navbar_font: ['Inknut Antiqua', 'serif'],
        // logo_font: ['Satisfy', 'cursive'],
      },
      maxWidth: {
        'navItem-width': '110px',
      },
      animation: {
        blinking: 'blinking 1s infinite',
      },
      keyframes: {
        blinking: {
          '0%': { opacity: 1 },
          '50%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
    },
  },
  variants: {
    extend: {
      opacity: ['disabled'],
      backgroundColor: ['disabled'],
    },
  },
  plugins: [
    formsPlugin,
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        '.disabled-style': {
          color: '#4a5568',
          opacity: '0.6',
        },
        '.modal-open': {
          overflow: 'hidden',
          height: '100%',
        },
      };

      addUtilities(newUtilities, ['responsive', 'hover']);
    }),
  ],
};