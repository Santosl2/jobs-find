/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{tsx,jsx}"],
  theme: {
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        "header-bg": "url('/bg.jpg')",
      },
      gridTemplateColumns: {
        body: "400px minmax(200px, 1fr)",
      },
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
