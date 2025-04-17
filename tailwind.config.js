/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./index.html",
  ],
  darkMode: "class",
  theme: {
    extend: {
      keyframes: {
        flyinright: {
          "0%": {
            opacity: "0",
            transform: "translate3d(-1500px, 0, 0)",
          },
          "60%": {
            opacity: "1",
            transform: "translate3d(25px, 0, 0)",
          },
          "75%": {
            transform: "translate3d(-10px, 0, 0)",
          },
          "90%": {
            transform: "translate3d(5px, 0, 0)",
          },
          "100%": {
            transform: "none",
          },
        },
        flyinleft: {
              "0%": {
                  opacity: "0",
                  transform: "translate3d(1500px, 0, 0)",
              },
              "60%": {
                  opacity: "1",
                  transform: "translate3d(-25px, 0, 0)"
              },
              "75%": {
                  transform: "translate3d(10px, 0, 0)"
              },
              "90%": {
                  transform: "translate3d(-5px, 0, 0)"
              },
              "100%": {
                  transform: "none"
              },
          },
      },
      animation: {
        flyinright: "flyinright 1s ease-in-out 0s both",
        flyinleft: "flyinleft 1s ease-in-out 0s both",
      },      
    },
  },
  plugins: [],
}

