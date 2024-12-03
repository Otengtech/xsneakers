/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}", // Adjust according to your project structure
    "./public/index.html", // If you're using a static HTML file
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/forms"), // For form styles
    require("@tailwindcss/typography"), // For typography utilities
  ],
};
