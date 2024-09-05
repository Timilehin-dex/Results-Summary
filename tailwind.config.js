/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html"],
  theme: {
    extend: {
      colors: {
        primary: {
          lightRed: "hsl(0, 100%, 67%)",
          orangeyYellow: "hsl(39, 100%, 56%)",
          greenTeal: "hsl(166, 100%, 37%)",
          cobaltBlue: "hsl(234, 85%, 45%)",
        },
        gradients: {
          lightSlateBlue: "hsl(252, 100%, 67%)",
          lightRoyalBlue: "hsl(241, 81%, 54%)",
          violetBlue: "hsla(256, 72%, 46%, 1)",
          persianBlue: "hsla(241, 72%, 46%, 0)",
        },
        neutral: {
          white: "hsl(0, 0%, 100%)",
          paleBlue: "hsl(221, 100%, 96%)",
          lightLavender: "hsl(241, 100%, 89%)",
          darkGrayBlue: "hsl(224, 30%, 27%)",
        },
      },
      fontFamily: {
        sans: ["Hanken Grotesk", "sans-serif"],
      },
      boxShadow: {
        custom: "0.5rem 1rem 3rem hsla(224, 30%, 27%, 0.2)",
      },
    },
  },
  plugins: [],
};
