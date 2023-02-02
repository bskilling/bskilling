/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      colors: {
        blue: "#2175d9",
        green: "#57b33e",
        orange:"#ffb511",
        coustom1: "#f7f5f0",
      },
      screens: {
        '3xl': '104 0px',
      },
      screens: {
        'tablet': '1300px',
        // => @media (min-width: 640px) { ... }
  
        
      },
    },
  },
  plugins: [],
}
