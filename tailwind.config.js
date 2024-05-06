/** @type {import('tailwindcss').Config} */
module.exports = {
  //archivos de refencia se encontraran en esa ruta
  //creo la carpeta src 
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'pollito': '#F6FF33',
      },
    },
  },
  plugins: [],
}

