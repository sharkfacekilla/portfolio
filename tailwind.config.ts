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
    },
    colors: {
      'black': '#18181B',
      'white': '#F5F5F5',
      'red': '#FF5A5F',
      'blue': '#087E8B',
      'green': '#CCE8CC',
      'light-blue': '#3EE2F4',
      'gray': '#808080'
    }
  },
  plugins: [],
};
export default config;