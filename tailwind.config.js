/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{tsx,jsx}"],
  theme: {
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
    },
    extend: {
      fontFamily: {
        title: ["Roboto", "sans-serif"],
      },
      colors: {
        "job-blue": "#334680",
      },
    },
  },
  plugins: [],
};
