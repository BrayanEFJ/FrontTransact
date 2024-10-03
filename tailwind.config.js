/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        oldstandard: ['"Old Standard TT"', 'serif'],
      },
    },
  },
  
  media: false,

 
  variants: {
    extend: {
      opacity: ['disabled'],
      cursor: ['disabled'],
      backgroundColor: ['active', 'disabled'],
      textColor: ['active', 'disabled'],
    },
  },
  
  experimental: {
    optimizeUniversalDefaults: true,
  },
  
  plugins: [],
}
