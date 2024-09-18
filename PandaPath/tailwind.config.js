/** @type {import('tailwindcss').Config} */
export default {
  content: [ 
    "./index.html", 
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        '150px': '150px',
        '600px':'600px',
      },
    },
  },
  plugins: [],
}

