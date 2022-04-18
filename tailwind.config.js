module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        offWhite: "#f6f4f0",
        darkBlue: "#2b2d42",
        hoverDarkBlue: "#444658",
        lightGray: "#7e8093",
        whitebgHover: "#e9e8e5",
        grayBorder: "#cfceca",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
