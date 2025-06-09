/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        mono: ['monospace', 'sans-serif'],
      },
      // Añadir colores para el tema de alto contraste
      backgroundColor: {
        'high-contrast-dark': '#000000',
      },
      textColor: {
        'high-contrast-light': '#ffffff',
        'high-contrast-accent': '#ffff00',
      },
      borderColor: {
        'high-contrast': '#ffffff',
      },
    },
  },
  plugins: [],
}

