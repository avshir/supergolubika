const colors = require("tailwindcss/colors");

//use: 
//indigo
//blue
//violet
//green
//gray
//orange
//red
//neutral
//white, black

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: {
        DEFAULT: colors.blue[950],
      },
      secondary: { ...colors.blue, DEFAULT: colors.blue[300] },
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.neutral,
      neutral: colors.neutral,
      blue: colors.blue,

      purple: colors.purple,
      violet: colors.violet,
      indigo: colors.indigo,
      green: colors.green,
      rose: colors.rose,
      pink: colors.pink,
      fuchsia: colors.fuchsia,
      sky: colors.sky,
      cyan: colors.cyan,
      teal: colors.teal,
      emerald: colors.emerald,
      lime: colors.lime,
      yellow: colors.yellow,
      amber: colors.amber,
      orange: colors.orange,
      red: colors.red,
      slate: colors.slate,
      zinc: colors.zinc,
      stone: colors.stone,
    },
    extend: {
      colors: {
        accent: {
          DEFAULT: colors.blue[300],
          green: "#A3D29D",
          beige: "#E5CAB3",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
