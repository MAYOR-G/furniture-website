/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ivory: "#f7f0e6",
        bone: "#efe2d0",
        linen: "#fbf7ef",
        charcoal: "#28221d",
        walnut: "#6f503b",
        bronze: "#a66f3f",
        clay: "#b88463",
        sage: "#7a866b",
        stone: "#d8cabb",
      },
      fontFamily: {
        display: ["Libre Caslon Display", "Georgia", "serif"],
        body: ["Manrope", "Avenir Next", "Segoe UI", "sans-serif"],
      },
      boxShadow: {
        soft: "0 22px 70px rgba(64, 42, 27, 0.12)",
        card: "0 18px 48px rgba(55, 39, 28, 0.10)",
        insetGlow: "inset 0 1px 0 rgba(255, 255, 255, 0.55)",
      },
      backgroundImage: {
        "linen-radial":
          "radial-gradient(circle at top left, rgba(166, 111, 63, 0.12), transparent 36%), linear-gradient(135deg, #fbf7ef 0%, #efe2d0 100%)",
        "charcoal-depth":
          "linear-gradient(135deg, #28221d 0%, #3b2c22 55%, #5f432f 100%)",
      },
      keyframes: {
        riseIn: {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        rise: "riseIn 680ms ease both",
      },
    },
  },
  plugins: [],
};
