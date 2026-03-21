module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ["var(--font-the-seasons)", "serif"],
        ovo: ["var(--font-ovo)", "serif"],
        logo: ["var(--font-the-seasons)", "serif"],
        heading: ["var(--font-the-seasons)", "serif"],
        subheading: ["var(--font-ovo)", "serif"],
        body: ["var(--font-poppins)", "sans-serif"],
      },
      keyframes: {
        fadeInTop: {
          "0%": {
            opacity: "0",
            transform:
              "translateY(-100px) rotateY(-30deg) rotateX(15deg) translateZ(100px)",
          },
          "100%": {
            opacity: "1",
            transform:
              "translateY(0) rotateY(-30deg) rotateX(15deg) translateZ(100px)",
          },
        },
        fadeInBottom: {
          "0%": {
            opacity: "0",
            transform:
              "translateY(100px) rotateY(30deg) rotateX(15deg) translateZ(100px)",
          },
          "100%": {
            opacity: "1",
            transform:
              "translateY(0) rotateY(30deg) rotateX(15deg) translateZ(100px)",
          },
        },
        caretBlink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
      },
      animation: {
        fadeInTop: "fadeInTop 1s ease-out forwards",
        fadeInBottom: "fadeInBottom 1s ease-out forwards",
        "caret-blink": "caretBlink 1s steps(1) infinite",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        accentGreen: "#D9EAA6",
        accentBlue: "#57B1B2",
        accentPurple: "#7A81D4",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
