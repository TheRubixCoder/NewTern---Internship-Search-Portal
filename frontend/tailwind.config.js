/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        mono: [
          "Menlo",
          "Monaco",
          "Consolas",
          "Liberation Mono",
          "Courier New",
          "monospace",
        ],
        // Define your custom font family for monospace category
      },
      colors: {
        primary: "#9fddf5",
        secondary: "#011425",
        tertiary: "#5c7c89",
        grey: "#242424",
        black: "#000000",
        white: "#ffffff",
      },
    },
  },
  plugins: [],
};
