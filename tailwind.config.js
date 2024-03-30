/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1280px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          transparent: "hsl(var(--primary-transparent))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        neutral: {
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b", // Your main neutral color
          600: "#475569",
          700: "#334155",
          800: "#1e293b",
          900: "#0f172a",
        },
        "primary-transparent": "hsl(var(--primary-transparent))",
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            h1: {
              marginBottom: theme("margin.2"),
              marginTop: theme("margin.2"),
              fontWeight: theme("fontWeight.normal"),
            },
            h2: {
              marginBottom: theme("margin.2"),
              marginTop: theme("margin.0"),
              fontWeight: theme("fontWeight.normal"),
            },
            h3: {
              marginBottom: theme("margin.2"),
              marginTop: theme("margin.1"),
              fontWeight: theme("fontWeight.normal"),
            },
            h4: {
              marginBottom: theme("margin.2"),
              marginTop: theme("margin.1"),
              fontWeight: theme("fontWeight.normal"),
            },
            h5: {
              marginBottom: theme("margin.2"),
              marginTop: theme("margin.1"),
              fontWeight: theme("fontWeight.normal"),
            },
            h6: {
              marginBottom: theme("margin.2"),
              marginTop: theme("margin.1"),
              fontWeight: theme("fontWeight.normal"),
            },
            p: {
              marginBottom: theme("margin.2"),
              marginTop: theme("margin.1"),
              fontWeight: theme("fontWeight.normal"),
              color: "#bdbdbd",
            },
          },
        },
      }),
      boxShadow: {
        icon: "0 -8px 5px 3px rgba(0, 0, 0, 0.3)",
        "icon-sm": "0 -5px 5px 0px rgba(0, 0, 0, 0.3)",
        innericon: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
        innerBtn:
          "0 -8px 5px 3px rgba(0, 0, 0, 0.1), inset 0px 4px 14px 7px rgba(0,0,0,0.35), inset 0px -2px 7px 4px rgba(140,100,255,0.7)",
        btn: "0 -8px 5px 3px rgba(0, 0, 0, 0.1)",
      },
      transitionDelay: {
        900: "875ms",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
};
