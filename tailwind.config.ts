import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./client/**/*.{ts,tsx}"],
  prefix: "",
  safelist: [
    // Neon color variations
    'text-neon-blue',
    'text-neon-purple',
    'text-neon-cyan',
    'text-neon-pink',
    'from-neon-blue/10',
    'from-neon-blue/20',
    'from-neon-purple/10',
    'from-neon-purple/20',
    'from-neon-cyan/10',
    'from-neon-cyan/20',
    'to-neon-blue/20',
    'to-neon-blue/40',
    'to-neon-purple/20',
    'to-neon-purple/40',
    'to-neon-cyan/20',
    'to-neon-cyan/40',
    'border-neon-blue/30',
    'border-neon-blue/60',
    'border-neon-purple/30',
    'border-neon-purple/60',
    'border-neon-cyan/30',
    'border-neon-cyan/60',
    'hover:border-neon-blue/60',
    'hover:border-neon-purple/60',
    'hover:border-neon-cyan/60',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
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
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        // Dark theme neon colors
        neon: {
          blue: {
            DEFAULT: "#00d4ff",
            dark: "#0099cc",
            glow: "rgba(0, 212, 255, 0.5)",
          },
          purple: {
            DEFAULT: "#a855f7",
            dark: "#7c3aed",
            glow: "rgba(168, 85, 247, 0.5)",
          },
          cyan: {
            DEFAULT: "#06b6d4",
            dark: "#0891b2",
            glow: "rgba(6, 182, 212, 0.5)",
          },
          pink: {
            DEFAULT: "#ec4899",
            dark: "#db2777",
            glow: "rgba(236, 72, 153, 0.5)",
          },
        },
        glass: {
          DEFAULT: "rgba(255, 255, 255, 0.1)",
          dark: "rgba(0, 0, 0, 0.3)",
          border: "rgba(255, 255, 255, 0.2)",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        glow: {
          "0%": { boxShadow: "0 0 5px currentColor" },
          "100%": { boxShadow: "0 0 20px currentColor, 0 0 30px currentColor" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        typing: {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
        blink: {
          "0%, 50%": { borderColor: "transparent" },
          "51%, 100%": { borderColor: "currentColor" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "float": "float 6s ease-in-out infinite",
        "glow": "glow 2s ease-in-out infinite alternate",
        "fadeIn": "fadeIn 1s ease-out",
        "slideUp": "slideUp 0.8s ease-out",
        "pulse-slow": "pulse 3s infinite",
        "typing": "typing 3.5s steps(40, end)",
        "blink": "blink 1s step-end infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
