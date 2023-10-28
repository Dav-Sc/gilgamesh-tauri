/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,jsx}", "./src/components/**/*.jsx",],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}

