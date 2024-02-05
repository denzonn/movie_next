import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'hover_white': '#ffffff80',
        'secondary_color': '#6d6d6eb3',
        'hover_secondary_color': '#6d6d6e80',
        'black_button': '#00000058',
      },
    },
  },
  plugins: [],
  jit: true,
};
export default config;
