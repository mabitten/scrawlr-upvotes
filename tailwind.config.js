/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          gray: {
            200: '#F4F6F8',
            300: '#E5E8FD',
            900: '#343A40',
          },
          blue: {
            500: '#253CF2',
          },
        },
      },
    },
    plugins: [],
  }