/** @type {import('tailwindcss').Config} */
import { magicui } from "magic-ui";

export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/magic-ui/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [magicui],
};
