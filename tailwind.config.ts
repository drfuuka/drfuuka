import { nextui } from "@nextui-org/react";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      layout: {
        radius: {
          small: "0.20rem",
          medium: "0.35rem",
          large: "0.55rem",
        },
        borderWidth: {
          small: "1px",
          medium: "1px",
        },
      },
      themes: {
        light: {
          colors: {
            primary: {
              DEFAULT: "#75d0e3",
              foreground: "#FDFDFD",
            },
            background: {
              DEFAULT: "#FDFDFD",
              "50": "#f9f9f9",
              "300": "#F0F0F0",
            },
            foreground: {
              DEFAULT: "#2d3a3d",
            },
          },
        },
        dark: {
          colors: {
            primary: {
              DEFAULT: "#75d0e3",
              foreground: "#FDFDFD",
            },
            background: {
              DEFAULT: "#192528",
              "300": "#1c2c30",
            },
          },
        },
      },
    }),
  ],
};
export default config;
