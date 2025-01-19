/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        slide: 'slide 0.1s linear',
      },
      keyframes: {
        slide: {
          '0%': { transform: 'translateX(-100%)' },
          // '100%': { transform: 'translateX(100%)' },
        },
      },
    },
  },
  plugins: [],
};
