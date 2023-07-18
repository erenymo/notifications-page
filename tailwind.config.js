/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*html"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Plus Jakarta Sans"],
      },
      colors: {
        body: "hsl(210, 60%, 98%)",
        veryLightGrayishBlue: "hsl(210, 60%, 98%)",
        lightGrayishBlue: "hsl(205, 33%, 90%)",
        grayishBlue: "hsl(219, 14%, 63%)",
        darkGrayishBlue: "hsl(219, 12%, 42%)",
        veryDarkBlue: "hsl(224, 21%, 14%)",
        midnightBlue: "hsl(218,87%,25%)",
      },
    },
  },
  plugins: [],
};
