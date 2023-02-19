/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      soft_cyan: "hsl(174, 77%, 80%)",
      strong_cyan: "hsl(174, 86%, 45%)",
      light_grayish_red: "hsl(14, 92%, 95%)",
      light_red: "hsl(15, 100%, 70%)",
      pale_blue: "hsl(226, 100%, 87%)",
      white: "hsl(0, 0%, 100%)",
      very_pale_blue: "hsl(230, 100%, 99%)",
      light_grayish_blue: "hsl(224, 65%, 95%)",
      light_grayish_blue_toggle: "hsl(223, 50%, 87%)",
      grayish_blue: "hsl(225, 20%, 60%)",
      dark_desaturated_blue: "hsl(227, 35%, 25%)",
    },
    fontFamily: {
      Manrope: "Manrope",
    },
    fontWeight: {
      medium: "600",
      bold: "800",
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
