import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Sampled from public/images/the-real-estate-agent-wordmark.svg. Do not eyeball
        // these off the raster logos - the JPEG wordmark gives a visibly wrong hue.
        brand: {
          DEFAULT: "#0F8743",
          dark: "#0B6532",
          tint: "#7FD1A0",
        },
        ground: "#0A1A11",
        cream: "#F2F0EB",
        ink: "#1A1A1A",
      },
    },
  },
  plugins: [],
};
export default config;
