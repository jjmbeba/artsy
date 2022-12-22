/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'satoshi':'Satoshi',
        'clash':'Clash Display',
        'stix':'STIX Two Text',
        'poppins':'Poppins'
      }
    },
  },
  plugins: [],
}
