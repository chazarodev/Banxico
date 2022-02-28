module.exports = {
  content: ["index.html","./src/**/*.jsx"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      "lightShades": "#FAF9FA",
      "lightAccent": "#ECAD62",
      "mainBrand": "#4D9CA1",
      "darkAccent": "#A2AFB1",
      "darkShades": "#31262F",
      "info": "#31262f",
      "succes": "#4ca968",
      "danger": "#f44336"
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    fontFamily: {
      serif: ['Cairo', 'sans-serif']
    },
    extend: {},
  },
  plugins: [],
}
