import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: {
        max: "400px",
      },

      md: {
        max: "768px",
      },
    },
    extend: {
      
      colors: {
        "primary": "#FFBF6F",
        "secondary": "#EB9380",
        "secondary-1": "#F9F871",
        "secondary-2": "#B47685",
        "tertiary": "#1D1D1D",
        "tertiary-1": "#CCCCCC",
      },
      boxShadow: {
        custom: "0 0 5px rgba(0, 0, 0, 0.1)",
        "custom-1": "0 0 5px rgba(255, 255, 255, 0.2)",
      },

    },
  },
  plugins: [],
};
export default config;
