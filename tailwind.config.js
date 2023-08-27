/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/pages/Auth.jsx", "./src/components/App.jsx"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
