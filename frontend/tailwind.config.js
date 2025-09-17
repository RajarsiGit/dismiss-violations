/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["InterVariable", "ui-sans-serif", "system-ui"], // Default body font
        heading: ["InterVariable", "ui-sans-serif", "system-ui"], // Optional custom heading font
      },
    },
  },
  plugins: [],
};
