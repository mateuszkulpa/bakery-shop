module.exports = {
  mode: "jit",
  purge: { content: ["./public/**/*.html", "./src/**/*.vue"] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["Open sans", "sans-serif"],
    },
    extend: {
      animation: {
        shake: "shake 0.5s ease-in-out forwards",
      },
      keyframes: {
        shake: {
          "0%": { transform: "translateX(0)" },
          "15%": { transform: "translateX(0.35rem)" },
          "30%": { transform: "translateX(-0.35rem)" },
          "45%": { transform: "translateX(0.35rem)" },
          "60%": { transform: "translateX(-0.35rem)" },
          "75%": { transform: "translateX(0.35rem)" },
          "90%": { transform: "translateX(-0.35rem)" },
          "100%": { transform: "translateX(0)" },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
  ],
};
