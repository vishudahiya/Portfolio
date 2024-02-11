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
        "custom-xs": "0.75rem", // Replace with your custom value
        "custom-sm": "0.875rem", // Replace with your custom value
        "text_custom-base": "1.15rem", // Replace with your custom value
        "custom-lg": "1.125rem", // Replace with your custom value
        "custom-xl": "1.25rem", // Replace with your custom value
      },
    },
  },
  plugins: [],
};
