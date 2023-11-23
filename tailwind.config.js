/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    "public/**/*.{html,js,css}",
  ],
  theme: {
    screens: {

      'xs' :'350px',

      'sm': '640px',

      'md': '768px',

      'lg': '1024px',

      'xl': '1280px',

      '2xl': '1536px',
    },
    colors :{
      'brand-red': '#A91D54',
      'brand-gray' : '#F3F3F3',
      'brand-light-gray':'#fbfbff',
      'brand-light-pink' : '#fff1f1',
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      red: colors.red,
      orange: colors.orange,
      amber: colors.amber,
      yellow: colors.yellow,
      lime: colors.lime,
      green: colors.green,
      emerald: colors.emerald,
      teal: colors.teal,
      cyan: colors.cyan,
      sky: colors.sky,
      blue: colors.blue,
      indigo: colors.indigo,
      violet: colors.violet,
      purple: colors.purple,
      fuchsia: colors.fuchsia,
      pink: colors.pink,
      rose: colors.rose,
    },
    extend: {
      height:{
        '13' :'50px'
      },
      aspectRatio: {
        '16/9': '960 / 540',
        '4/3': '640 / 480',
      },
      fontSize:{
        '2xl+': ['28px', '34px'],
        '4xl+': ['36px', '40px'],
        '5xl+': ['54px', '1'],
      },
      textUnderlineOffset: {
        6: '6px',
      },
      fontFamily: {
      },
      backgroundImage: {
        'hero-banner': "url('assets/hero-img/hero-banner.webp')",
        'hero-shape': "url('assets/hero-img/hero-shape.webp')",
        'highlight-card-animate': "url(https://a.storyblok.com/f/45434/x/fafbf088ef/masters-card.svg)",
      },
      backgroundColor:{
        'modal-dark-fade':'rgba(0, 0, 0, 0.4)',
        'institute':'linear-gradient(to right , #FFFFFF 20% , #A91D54 80%)',
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
      }
    },
  },
  plugins: [],
}

