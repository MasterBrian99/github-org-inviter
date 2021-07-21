module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gemstone: "#2DC89D",
        "light-cherry": "#E42F45",
        "crazy-grey": "#888888",
        "cyan-blueish-blue": "#1492EC",
      },
      borderColor: {
        "light-cherry": "#E42F45",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
