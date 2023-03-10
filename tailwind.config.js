/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,vue,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "480px",
        md: "768px",
        lg: "976px",
        xl: "1440px",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif"],
        poppins: ["Poppins", "ui-sans-serif"],
      },
      colors: {
        primary: "#005D91",
        secondary: "#B0F0C0",
        tertiary: "#89CFB5",
      },
    },
  },
  plugins: [],
};
