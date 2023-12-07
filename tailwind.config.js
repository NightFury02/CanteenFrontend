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

        // Status
        completed: "#50D1AA",

        //text
        light: "#ABBBC2",

        //Box-shadow
        brown: "rgba(234, 124, 105, 0.30)",
      },
      fontFamily: {
        barlow: 'Barlow',
      },
    },
  },
  plugins: [],
};
