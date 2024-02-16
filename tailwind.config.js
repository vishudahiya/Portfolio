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
        "text-large": "1.9rem",
        "text-medium": "1.7rem",
        "icon-small": "1.25rem",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      height: {
        custom: "380px",
        custom1: "380px",
      },
      width: {
        custom: "980px",
        custom1: "380px",
      },
      borderWidth: {
        "custom-border": "0.1px", // Custom border size
        "custom-border1": "1px", // Custom border size
      },
    },
  },
  plugins: [],
};
