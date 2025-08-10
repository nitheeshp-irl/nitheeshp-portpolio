/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        surface: {
          DEFAULT: "#ffffff",
          soft: "#f8fafc",
          ring: "#e5e7eb",
        },
        brand: {
          primary: "#2563EB",
          secondary: "#7C3AED",
          info: "#06B6D4",
          success: "#10B981",
          warn: "#F59E0B",
          danger: "#EF4444",
        },
      },
      backgroundImage: {
        "hero-gradient":
          "radial-gradient(1200px 600px at 10% -10%, rgba(124,58,237,.15), transparent 55%), radial-gradient(900px 500px at 90% 10%, rgba(37,99,235,.12), transparent 60%), linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)",
      },
      boxShadow: {
        elevated: "0 8px 24px -12px rgba(2,6,23,.20)",
      },
    },
  },
  plugins: [],
};
