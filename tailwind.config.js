/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "profile-bkg": "#ced2d9ff",
        "dark-blue": "#0f1729ff",
        "grey-dark": "#363636ff",
        "grey-theme": "#545454ff",
      },
      margin: {
        custom: "8rem",
      },
      fontSize: {
        "text-large": "2rem",
        "text-medium": "1.25rem",
        "icon-small": "1.25rem",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      height: {
        custom: "400px",
      },
      width: {
        custom: "1600px",
      },
    },
  },
  plugins: [],
};
