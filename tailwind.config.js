/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        "main_blue_color": "#329BFB",
        "hover_color": "rgb(0 98 187)",
        "main_turquoise_color": "#28FFFF"        
      },
      borderColor:{
        "my_border_color": "#329BFB"
      }
    },
  },
  plugins: [],
};
