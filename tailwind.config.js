/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      m: { max: "1400px" },
    },
    extend: {},
  },
  plugins: [],
  darkMode: "class",
};
