/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'white': '#F1F0EA',
      'gray':'#cfcbb4',
      'gray-light': '#E0DDCF',
      'gray-dark': '#474448',
      'blue': '#94AAB4',
      'blue-dark': '#487699',
      'black': '#2D232E',
      'red': '#CF4526',
      'red-light':'#DC5E41',
      'white-light': '#FFFFFF'
    // },
    // extend: {
    //   borderColor:'black',
    //   borderWidth:'4px',
    //   borderRadius: {
    //     '4xl': '2rem',
    //   }
    }
  },
  plugins: [],
}

