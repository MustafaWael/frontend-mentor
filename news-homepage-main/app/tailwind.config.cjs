/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      soft_orange: "hsl(35, 77%, 62%)",
      soft_red: "hsl(5, 85%, 63%)",
      off_white: "hsl(36, 100%, 99%)",
      grayish_blue: "hsl(233, 8%, 79%)",
      dark_grayish_blue: "hsl(236, 13%, 42%)",
      very_dark_blue: "hsl(240, 100%, 5%)",
    },
    fontFamily: {
      Inter: "Inter",
    },
    fontWeight: {
      semi_bold: "400",
      bold: "700",
      bolder: "800",
    },
    extend: {
      screens: {
        Mobile: "375px",
        Desktop: "1440px",
      },
      fontSize: {
        paragraph: "15px",
      },
    },
  },
  plugins: [],
};
