const colors = require("tailwindcss/colors")

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./views/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      ml: "800px",
      lg: "976px",
      ls: "1135px",
      lx: "1250px",
      xl: "1440px",
    },
    colors: {
      transparent: "transparent",
      black: "#000",
      white: "#fff",
      default: {
        blue: "#667EEA",
        gray: "#E8E8E8",
        disable: "#BFBFBF",
        lightDisable: "#B2B2B2",
        bgCol: "#F7F7FA",
        textCol1: "#1A1A1A",
        textCol2: "#828282",
        lightGrey: "#FCFBFB",
        borderCol: "#F0F0F0",
      },
      card: {
        lightBlue: "#C9D2F8",
        lightRed: "#FFCCCC",
        lightGreen: "#009416",
        textCol: "#636363",
      },
      gray: colors.gray,
      blue: colors.sky,
      red: colors.rose,
      pink: colors.fuchsia,
    },
    fontFamily: {
      sans: ["WorkSans", "sans-serif"],
      serif: ["WorkSans", "serif"],
      grotesk: ["Space Grotesk"],
    },
    extend: {},
  },
  plugins: [],
}
