/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        textPrimary: "#006969",
        textSecondary: "#008783",
        textBlack: "#131313",
        textWhite: "#E6E6E6",
        bgPrimary: "#01A29D",
        bgSekunder: "#DADADA",
        yellow: "#CFCD06",
        red: "#DD735D",
      },
    },
  },
  plugins: [],
};
