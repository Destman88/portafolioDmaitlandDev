/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        dark: "#15101C",
        light: "#f5f5f5",
        primary: "#230450",
        secondary: "#ffb502",
        auxiliarPurple: "#9d49f6",
        auxiliarGrey: "#c5c4c6",
      },
      animation: {
        "spin-slow": "spin 8s linear infinite",
      },
      backgroundImage: {
        circularLight:
          "repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#f5f5f5 5px, #f5f5f5 100px);",
        circularDark:
          "repeating-radial-gradient(rgba(255, 255, 255,0.4) 2px,#15101C 8px, #15101C 100px);",
      },
      boxShadow: {
        cusLig: "9px 10px 0px 4px rgb(0, 0, 0)",
        cusDark: "9px 10px 0px 4px rgb(255, 255, 255)",
      },
    },
  },
  plugins: [],
};
