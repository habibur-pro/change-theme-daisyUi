/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      // all theme here
      //first theme will be default theme
      "light", "dark", "cupcake", "bumblebee", "emerald", "corporate", "synthwave", "retro", "cyberpunk", "valentine", "halloween", "garden", "forest", "aqua", "lofi", "pastel", "fantasy", "wireframe", "black", "luxury", "dracula", "cmyk", "autumn", "business", "acid", "lemonade", "night", "coffee", "winter",
      {
        light: {

          ...require("daisyui/src/colors/themes")["[data-theme=light]"],
          // change just one color
          "base-100": "#eeFFFF",

        },
        dark: {

          // change all color 
          "primary": "#4b5563",

          "secondary": "#9ca3af",

          "accent": "#4b5563",

          "neutral": "#1f2937",

          "base-100": "#1f2937",

          "info": "#1c1917",

          "success": "#6b7280",

          "warning": "#9ca3af",

          "error": "#111827",
        }
      },

    ]
  },
}

