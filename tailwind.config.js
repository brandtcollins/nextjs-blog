module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        whitebg: "#f6f4f0",
        grayBorder: "#cfceca",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
