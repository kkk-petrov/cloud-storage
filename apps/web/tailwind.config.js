import { fontFamily } from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export const darkMode = ["class"];
export const content = ["./src/**/*.{ts,tsx}"];
export const theme = {
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
            background: "var(--background)",
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
                DEFAULT: "var(--accent)",
                foreground: "var(--accent-foreground)",
            },
            popover: {
                DEFAULT: "hsl(var(--popover))",
                foreground: "hsl(var(--popover-foreground))",
            },
            card: {
                DEFAULT: "hsl(var(--card))",
                foreground: "hsl(var(--card-foreground))",
            },
            ltgray: {
                DEFAULT: "#363636",
                foreground: "#7B7B7B",
            },
        },
        backgroundImage: {
            "auth-pattern": "url(/auth-pattern.png)",
        },
        borderRadius: {
            lg: "var(--radius)",
            md: "calc(var(--radius) - 2px)",
            sm: "calc(var(--radius) - 4px)",
        },
        fontFamily: {
            sans: ["var(--font-sans)", ...fontFamily.sans],
        },
        animation: {
            loader: "spin 1.5s ease infinite",
        },
        dropShadow: {
            xl: "0 0px 20px var(--accent)",
        },
    },
};
export const plugins = [require("tailwindcss-animate")];
