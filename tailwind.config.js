/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    fontFamily: {
      dosis: ["Dosis", "sans-serif"],
      inter: ["Inter", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        "hero-blob": "url('/src/assets/images/blob-haikei.svg')",
      },
    },
  },
}
