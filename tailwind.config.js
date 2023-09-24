/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#0770CD"
      },
      screens: {
        "mobile": {"max": "480px"},
        "tablet": {"min": "481px", "max": "1023px"}
      }
    },
  },
  plugins: [],
}

