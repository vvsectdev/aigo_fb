import type { Config } from "tailwindcss";

const config:Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xxl: { min: "1460px" },

      xl: { max: "1460px" },
      // => @media (max-width: 1527px) { ... }

      lg: { max: "991px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "520px" },
      // => @media (max-width: 639px) { ... }
    },
    extend: {
      fontFamily: {
        'bai-jamjuree': ['var(--font-bai-jamjuree)'],
      },
      boxShadow: {
        'custom-purple': '0px 4px 18.4px 0px rgba(162, 90, 255, 0.42)',
        'inner-image': 'background: linear-gradient(0deg, #727272, #727272),\n' +
          'linear-gradient(180deg, rgba(0, 0, 0, 0.07) 24%, rgba(149, 89, 255, 0.567) 79.5%);\n'
      },
      backgroundImage: {
        'button-gradient': `linear-gradient(95.62deg, #8E59FF 9.06%, #B659FF 104.43%)`
      },
    },
  },
  plugins: [],
}
export default config;
