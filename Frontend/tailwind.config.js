/** @type {import('tailwindcss').Config} */
function withOpacity(variableName) {
    return ({ opacityValue }) => {
        if (opacityValue !== undefined) {
            return `rgba(var(${variableName}), ${opacityValue})`;
        }
        return `rgb(var(${variableName}))`;
    };
}

module.exports = {
    darkMode: ["class"],
    content: [
        "./pages/**/*.{ts,tsx}",
        "./components/**/*.{ts,tsx}",
        "./app/**/*.{ts,tsx}",
        "./src/**/*.{ts,tsx}",
    ],
    theme: {
        fontWeight: {
            hairline: "100",
            thin: "200",
            light: "300",
            normal: "400",
            medium: "500",
            semibold: "600",
            bold: "700",
            extrabold: "800",
            black: "900",
        },
        container: {
            center: true,
            padding: "2rem",
            screens: {
                "2xl": "1400px",
            },
        },

        extend: {
            colors: {
                "active-border": withOpacity("--active-border"),
                "table-head": withOpacity("--table-head"),
                border: withOpacity("--border"),
                input: withOpacity("--input"),
                ring: withOpacity("--ring"),
                background: withOpacity("--background"),
                foreground: withOpacity("--foreground"),
                hover: withOpacity("--hover"),
                primary: {
                    DEFAULT: withOpacity("--primary"),
                    foreground: withOpacity("--primary-foreground"),
                },
                secondary: {
                    DEFAULT: withOpacity("--secondary"),
                    foreground: withOpacity("--secondary-foreground"),
                },
                tertiary: {
                    DEFAULT: withOpacity("--tertiary"),
                    foreground: withOpacity("--tertiary-foreground"),
                },
                warning: {
                    DEFAULT: withOpacity("--warning"),
                    foreground: withOpacity("--warning-foreground"),
                },
                success: {
                    DEFAULT: withOpacity("--success"),
                    foreground: withOpacity("--success-foreground"),
                },
                destructive: {
                    DEFAULT: withOpacity("--destructive"),
                    foreground: withOpacity("--destructive-foreground"),
                },
                muted: {
                    DEFAULT: withOpacity("--muted"),
                    foreground: withOpacity("--muted-foreground"),
                },
                accent: {
                    DEFAULT: withOpacity("--accent"),
                    foreground: withOpacity("--accent-foreground"),
                },
                popover: {
                    DEFAULT: withOpacity("--popover"),
                    foreground: withOpacity("--popover-foreground"),
                },
                card: {
                    DEFAULT: withOpacity("--card"),
                    foreground: withOpacity("--card-foreground"),
                },
                neutral: {
                    DEFAULT: withOpacity("--neutral-400"),
                    100: withOpacity("--neutral-100"),
                    200: withOpacity("--neutral-200"),
                    300: withOpacity("--neutral-300"),
                    400: withOpacity("--neutral-400"),
                    500: withOpacity("--neutral-500"),
                    600: withOpacity("--neutral-600"),
                    700: withOpacity("--neutral-700"),
                    800: withOpacity("--neutral-800"),
                    900: withOpacity("--neutral-900"),
                },
                headings: {
                    DEFAULT: withOpacity("--headings")
                }
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
            fontFamily: {
                inter: ["var(--font-inter)", "sans"],
            },
        },
    },
    plugins: [],
};
