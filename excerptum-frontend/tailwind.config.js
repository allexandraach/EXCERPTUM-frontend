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
        // nav bg color
        chestnut_brown: '#653434',
        // #65344d
        // bav font color
        soft_beige: '#fbefdf',
        magenta: '#a10872',
        dark_magenta: '#80065b',
        dark_magenta_hover: '#70054f',
        wine: '#65344d',
        gray_shadow: '#a0a1a2',
        gray_hover: '#848a94',
        modal_bg: '#0303032e',
      },
      backgroundImage: {
        home_hero_img_1: "url('./src/images/home/hero_img_1.png')",
        home_hero_img_2: "url('./src/images/home/hero_img_2.png')"
      },
      fontFamily: {
        satisfy: ['Satisfy', 'cursive']
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