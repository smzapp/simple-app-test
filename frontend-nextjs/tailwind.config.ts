import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },      
      colors: {
        primary: '#02314F',
        secondary: '#FE8400',
        gray: '#ccc',
        lightGray: '#f0f0f0',
        danger: 'red'
      },
      screens: {
        xs: '320px',
        mbl: '896px',
        lbx: '1152px',
      },
      fontSize: {
        xss: '10px',
        xsss: '8px',
        xssss: '7px',
      },
    },
  },
  plugins: [],
};
export default config;
