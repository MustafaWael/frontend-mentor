/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      red: "hsl(1, 90%, 64%)",
      blue: "hsl(219, 85%, 26%)",
      White: "hsl(0, 0%, 100%)",
      light_grayish_blue_1: "hsl(211, 68%, 94%)",
      light_grayish_blue_2: "hsl(205, 33%, 90%)",
      grayish_blue: "hsl(219, 14%, 63%)",
      dark_grayish_blue: "hsl(219, 12%, 42%)",
      very_dark_blue: "hsl(224, 21%, 14%)",
    },
    fontFamily: {
      "Plus Jakarta": "Plus Jakarta Sans",
    },
    fontWeight: {
      bold: "500",
      bolder: "800",
    },
    extend: {
      screens: {
        Mobile: "375px",
        Desktop: "1440px",
      },
      fontSize: {
        paragraph: "16px",
      },
    },
  },
  plugins: [],
};
