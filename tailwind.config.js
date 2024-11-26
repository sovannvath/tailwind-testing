/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',  
    './src/**/*.html', // Includes all HTML files inside `src/`
    './src/**/*.js',  
  ],
  theme: {
    extend: {
      colors : {
        primary : "#ffffff" , 
      },
      fontFamily : {
        body : ['inter']
      }

    },
  },
  plugins: [],
}

