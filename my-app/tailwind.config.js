module.exports = {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        primary: ['PrimaryFont', 'sans-serif'],
        secondary: ['SecondaryFont', 'sans-serif'],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        black: {
          DEFAULT: '#1f1f1f',
          100: '#060606',
          200: '#0c0c0c',
          300: '#121212',
          400: '#181818',
          500: '#1f1f1f',
          600: '#4b4b4b',
          700: '#787878',
          800: '#a5a5a5',
          900: '#d2d2d2',
        },
        primary: {
          DEFAULT: '#ff6b00',
          100: '#331500',
          200: '#662b00',
          300: '#994000',
          400: '#cc5500',
          500: '#ff6b00',
          600: '#ff8833',
          700: '#ffa666',
          800: '#ffc499',
          900: '#ffe1cc',
        },
        secondary: {
          DEFAULT: '#44cf6c',
          100: '#0b2c14',
          200: '#175829',
          300: '#22833d',
          400: '#2daf52',
          500: '#44cf6c',
          600: '#6ad989',
          700: '#8fe2a7',
          800: '#b4ecc4',
          900: '#daf5e2',
        },
        blue: {
          DEFAULT: '#31afd4',
          100: '#09232b',
          200: '#124656',
          300: '#1b6981',
          400: '#248cac',
          500: '#31afd4',
          600: '#5abedc',
          700: '#83cee5',
          800: '#addeee',
          900: '#d6eff6',
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
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

