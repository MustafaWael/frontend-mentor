/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      marine_blue: "hsl(213, 96%, 18%)",
      purplish_blue: "hsl(243, 100%, 62%)",
      pastel_blue: "hsl(228, 100%, 84%)",
      light_blue: "hsl(206, 94%, 87%)",
      strawberry_red: "hsl(354, 84%, 57%)",
      cool_gray: "hsl(231, 11%, 63%)",
      light_gray: "hsl(229, 24%, 87%)",
      magnolia: "hsl(217, 100%, 97%)",
      alabaster: "hsl(231, 100%, 99%)",
      white: "hsl(0, 0%, 100%)",
    },
    fontFamily: {
      Ubuntu: "Ubuntu",
    },
    fontWeight: {
      regular: "400",
      medium: "500",
      bold: "700",
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
