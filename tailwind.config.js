/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ivory: "#f7f0e6",
        bone: "#efe2d0",
        linen: "#fbf7ef",
        charcoal: "#1A1A1A",
        slate: "#57534E",
        amber: "#B45309",
        walnut: "#6f503b",
        bronze: "#a66f3f",
        wood: "#4A3018",
      },
      fontFamily: {
        display: ["'Cormorant Garamond'", "Georgia", "serif"],
        sans: ["'Geist Sans'", "Inter", "sans-serif"],
        mono: ["'Geist Mono'", "monospace"],
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
          "linear-gradient(135deg, #1A1A1A 0%, #2D2A26 55%, #3D3D3D 100%)",
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
