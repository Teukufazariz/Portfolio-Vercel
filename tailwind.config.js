   /** @type {import('tailwindcss').Config} */
   export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          helvetica: ['"Helvetica Neue"', 'Helvetica', 'Arial', 'sans-serif'],
          futura: ['Futura', 'sans-serif'],
          courier: ['Courier', 'monospace'],
        },
        colors: {
          cream: '#f9efce',
          babyBlue: '#68c9d2',
          pink: '#f8c1bf',
          gold: '#e2be5e',
          green: '#c2e0bc',
        },
      },
    },
    plugins: [],
  }