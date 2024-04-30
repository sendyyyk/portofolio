/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '128': '32rem'
      },

      height: {
        '8.4/12': '70%',
        '3.6/12': '30%',
      },

      lineHeight: {
        '0': '0'
      },

      backgroundColor: {
        'primary': 'rgb(37, 37, 37)'
      },

      borderRadius: {
        '1.5xl': '17px'
      },
      boxShadow: {
        '2xl': ' 0 0 5px 2px rgba(37, 37, 37, 0.5)',
        '1xl': ' 0 0 5px 2px rgba(37, 37, 37, 0.2)',
      },
      transform: {
        'skew-25': 'skewY(25deg)',
        'translate-150': 'translateX(-100%)',
        'rotate-90': 'rotate(90deg)',
      },

      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

