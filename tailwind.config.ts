import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "16px",
      screens: {
        DEFAULT: "1280px",
      },
    },
    extend: {
      boxShadow: {
        "header-shadow": "0px 1px 1px 0px rgba(0, 0, 0, 0.10)",
        "blog-card": " 0px 0px 0px 1px rgba(23, 23, 23, 0.05)",
        sharp: "0px 0px 0px 1px #171717",
      },
    },
  },
  plugins: [],
};
export default config;
