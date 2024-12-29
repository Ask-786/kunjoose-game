/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        "noto-arabic": ["Noto Naskh Arabic", "serif"],
      },
    },
  },
  plugins: [require("tailwindcss-motion")],
};
