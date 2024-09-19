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
        '200px': '200px',
        '600px': '600px',
      },
      maxWidth: {
        '102': '102vw'

      },
      colors: {
        'col': '#F4F4F4',
        'col2': '#696969',
        'col3': '#CCCCCC'

      },
      boxShadow: {

        'inner-custom': 'inset 0px 4px 0px 0px #F4F4F4'

      },

    },
  },
  plugins: [],
}

