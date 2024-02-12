/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-blue": "#0f1729ff",
        "blue-light": "#7375ffff",
        "grey-theme": "#1e293bff",
      },
      margin: {
        custom: "8rem",
      },
      fontSize: {
        "text-large": "2rem", // Replace with your custom value
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
