const { Container } = require("postcss");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      colors: {
        "Soft-red": "hsl(7, 99%, 70%)",
        "Very-Dark-Magenta": " hsl(300, 43%, 22%)",
        "Soft-Pink": " hsl(333, 80%, 67%)",
        "Dark-Grayish-Magenta": " hsl(303, 10%, 53%)",
        "Light-Grayish-Magenta": " hsl(300, 24%, 96%)",
        White: "hsl(0, 0%, 100%)",
      },
    },
  },
  plugins: [],
  corePlugins: {
    container: false,
  },
};
