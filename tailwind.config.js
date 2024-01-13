/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      fontSize: {
        regularSmall: ['0.8125rem', '1rem'],
        regularMedium: ['0.875rem', '1.25rem'],
        regularLarge: ['1.125rem', '1.625rem'],
        extraSmall: ['1.5rem', '1.8rem'],
        extraMedium:['2rem', '2.2rem'],
        extraLarge:['3.25rem', '3.575rem'],
        '4xl': ['2.5rem', '2.75rem'],
        '6xl': ['3.75rem','4.125rem'],
      },
      maxWidth: {
        '7xl': '1060px',
        '8xl': '1280px',
      },
      colors: {
        primary: 'var(--va-primary)',
        secondary: 'var(--va-secondary)',
        success: 'var(--va-success)',
        info: 'var(--va-info)',
        danger: 'var(--va-danger)',
        warning: 'var(--va-warning)',
        backgroundPrimary: 'var(--va-background-primary)',
        backgroundSecondary: 'var(--va-background-secondary)',
        backgroundElement: 'var(--va-background-element)',
        backgroundBorder: 'var(--va-background-border)',
        textPrimary: 'var(--va-text-primary)',
        textInverted: 'var(--va-text-inverted)',
        shadow: 'var(--va-shadow)',
        focus: 'var(--va-focus)',
      },
      screens: {
        xs: '0px',
        sm: '640px',
        xm: '1000px',
        md: '1108px',
        lg: '1440px',
        xl: '1920px',
      },
    },
  },
  plugins: [],
}

