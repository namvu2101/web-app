import type { Config } from "tailwindcss";

export default {
  content: [
    ".src/app/**/*.{js,ts,jsx,tsx,mdx}", // Note the addition of the `app` directory.
    ".src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    ".src/components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "media",
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
