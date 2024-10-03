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
  // Activar el modo JIT (Just-In-Time) para mejor rendimiento
  mode: 'jit',
  
  // Optimizaciones para producción
  future: {
    hoverOnlyWhenSupported: true,
    respectDefaultRingColorOpacity: true,
    disableColorOpacityUtilitiesByDefault: true,
    removeDeprecatedGapUtilities: true,
  },
  
  // Reducir el tamaño del bundle
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    options: {
      safelist: [],
      blocklist: [],
      keyframes: true,
      fontFace: true,
    },
  },
  
  // Optimizaciones de medios
  media: false, // Deshabilita la generación de media queries no utilizadas
  
  // Variantes personalizadas optimizadas
  variants: {
    extend: {
      opacity: ['disabled'],
      cursor: ['disabled'],
      backgroundColor: ['active', 'disabled'],
      textColor: ['active', 'disabled'],
    },
  },
  
  // Caching para mejor rendimiento
  experimental: {
    optimizeUniversalDefaults: true,
  },
  
  plugins: [],
}