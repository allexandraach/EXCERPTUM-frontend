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
        // nav font color
        soft_beige: '#fbefdf',
        // paragraph text color
        dark_brown: '#381D1D',
        magenta: '#a10872',
        dark_magenta: '#80065b',
        dark_magenta_hover: '#70054f',
        wine: '#65344d',
      },
      backgroundImage: {
        home_hero_img_1: 'url("/public/images/home/hero_img_1.webp")'
      },
      fontFamily: {
        satisfy: ['Satisfy', 'cursive']
      },
      maxWidth: {
        'navItem-width': '110px',
      },
      animation: {
        blinking: 'blinking 1s infinite',
        fadeIn: 'fadeIn 1s ease-out',
        slideIn: 'slideIn 1s ease-out',
      },
      keyframes: {
        blinking: {
          '0%': { opacity: 1 },
          '50%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        slideIn: {
          '0%': { transform: 'translateX(50px)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
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