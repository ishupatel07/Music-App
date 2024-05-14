/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dir/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [
    function ({addUtilities}) {
      const newUtilities = {
        ".no-scroll::-webkit-scrollbar":{
          display:"none",
        } ,
        ".no-scrollbar" : {
          "-ms-overflow-style" : "none",
          "scrollbar-width" : "none",
         
        },
      };
      addUtilities(newUtilities)
    }
  ],
}