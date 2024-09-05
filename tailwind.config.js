/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,css}"],
  theme: {
    extend: {
      colors: {
        primLight: "#ff4655",
        primDark: "#131f2a",
        SecLight: "#ff6c78",
        SecDark: "#414f5d",
        LightG: "#EAE4EA",
      },
      screens: {
        'xsm': '250px',
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite ',
        'spin-slow-rev': 'spin 3s linear alternate-reverse ',
      },
      backgroundImage: {
        'bg-lines': "url('/src/Assets/Imgs/bg-lines.png')",

      }
    },
  },
  plugins: [],
}

