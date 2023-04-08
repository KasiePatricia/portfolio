/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [[require("daisyui")]],
};

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navBg: "#0a192fd9",
        mGreen: "#64ffda",
      },
      backdropBlur: {
        mn: "10px",
      },
      height: {
        navHeight: "6.25rem",
      },
    },
  },
  plugins: [require("daisyui")],
};
