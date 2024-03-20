/** @type {import('tailwindcss').Config} */
export default {
  //This from tailwindcss to replace the empty content I had before
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    //I defined all the colors I will use in my project
    extend: {
      colors: {
        "yellow": "#F5C32C",
        "orange": "#FCA61F",
        "black": "#242D49",
        "gray": "#788097",
        "blueCard": "#DDF8FE",
        "purrple": "rgb(238 210 255)",
        "boxShadow": "0px 19px 60px rgb(0 0 0 / 8%)",
        "orangeCard": "rgba(252, 166, 31, 0.45)",
        "smboxShadow": "-79px 51px 60px rgba(0, 0, 0, 0.08)"

      },
      fontFamily: {
        "primary": ["Truculenta", "sans-serif"]
      }
    },
  },
  plugins: [require("daisyui")],
}

