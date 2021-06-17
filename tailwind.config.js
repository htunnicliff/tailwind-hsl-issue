module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "evergreen-spaces": "hsl(152 75% 40%)",
        "evergreen-commas": "hsl(152, 75%, 40%)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
