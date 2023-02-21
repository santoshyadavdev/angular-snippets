/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            "code::before": {
              content: '""',
            },
            "code::after": {
              content: '""',
            },
            code: {
              fontFamily: "Fira Code, monospace",
              span: {
                fontFamily: "Fira Code, monospace",
              },
            },
            "div[data-remark-code-title]": {
              backgroundColor: colors.neutral[800],
              fontFamily: "Fira Code, monospace",
              fontSize: "0.8rem",
              padding: "0.5rem 1rem",
              borderTopRightRadius: "0.25rem",
              borderTopLeftRadius: "0.25rem",
              transitionDuration: "150ms",
            },
            "div[data-remark-code-title] + pre": {
              marginTop: "0 !important",
              borderTopRightRadius: "0 !important",
              borderTopLeftRadius: "0 !important",
              transitionDuration: "150ms",
            },
            "p, li": {
              code: {
                backgroundColor: "#27272a",
                padding: "0.250rem 0.4rem",
                borderRadius: "0.250rem",
                fontWeight: "300",
                color: "white",
                transitionProperty: "color, background-color",
                transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
                transitionDuration: "150ms",
              },
            },
            "html:not(.dark) div[data-remark-code-title]": {
              backgroundColor: colors.zinc[200],
              color: colors.black,
              transitionDuration: "150ms",
            },
            "html:not(.dark) p, li": {
              code: {
                backgroundColor: colors.zinc[200],
                padding: "0.250rem 0.4rem",
                borderRadius: "0.250rem",
                fontWeight: "300",
                color: "black",
                transitionProperty: "color, background-color",
                transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
                transitionDuration: "150ms",
              },
            },
          },
        },
      },
      fontFamily: {
        sans: ["InterVariable", "Inter", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("tailwind-scrollbar")],
};
