import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "vc25-green": "#386634",
        "vc25-green-light": "#a2d172",
        "vc-green": "#273617",
        "vc-green-light": "#005D35",
        "vc-purple": "#40336E",
        "vc-purple-light": "#5A46A1",
        "vc-light": "#FCEDCE",
        "vc-orange": "#D99342",
      },
    },
  },
  plugins: [],
};
export default config;
