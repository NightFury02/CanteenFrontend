/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Login/Register Form
        "dark-pink": "#C10C99",
        form: "#050214",

        // Homepage
        primary: "#EA7C69",

        // Background
        "dark-bg-2": "#1F1D2B",
        "dark-line": "#393C49",

        // Satus
        completed: "#50D1AA",
      },
      fontFamily: {},
    },
  },
  plugins: [],
};
