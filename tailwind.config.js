import { RiLightbulbLine } from 'react-icons/ri';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Romanica: ['Romanica', 'sans-serif'], // Ensure it matches your @font-face name
      },
      colors: {
     
        lightblue:'#75b728',
        grey:'#d7b469',
    },
  }
  },
  plugins: [],
}