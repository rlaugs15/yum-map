import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      screens: {
        mobile: { max: "768px" }, // 480px ~ 768px
        web: "769px", // 769px 이상,
      },
      fontSize: {
        "2xl": ["32px", { lineHeight: "130%" }],
        xl: ["28px", { lineHeight: "130%" }],
        lg: ["24px", { lineHeight: "135%" }],
        md: ["22px", { lineHeight: "150%" }],
        sm: ["20px", { lineHeight: "150%" }],
        "text-2xl": ["18px", { lineHeight: "150%" }],
        "text-xl": ["17px", { lineHeight: "150%" }],
        "text-lg": ["16px", { lineHeight: "150%" }],
        "text-md": ["16px", { lineHeight: "135%" }],
        "text-sm": ["14px", { lineHeight: "150%" }],
        "text-xs": ["12px", { lineHeight: "150%" }],
        "text-2xs": ["11px", { lineHeight: "150%" }],
      },
    },
  },
  plugins: [],
} satisfies Config;
