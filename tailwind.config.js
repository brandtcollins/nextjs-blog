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
        medOffWhite: "#c2c1be",
        lightBlue: "#6d72a8",
        darkBlue: "#2b2d42",
        medBlue: "#535780",
        hoverDarkBlue: "#32344d",
        lightGray: "#7e8093",
        mediumGray: "#a8a7a5",
        darkGray: "#535561",
        whitebgHover: "#e9e8e5",
        grayBorder: "#cfceca",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
