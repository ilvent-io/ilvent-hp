export const theme = {
  colors: {
    background: '#FFFFFF',
    text: '#333333',
    primary: '#0052CC', // Deep Blue
    secondary: '#172B4D', // Midnight Blue
    accent: '#00B8D9', // Cyan/Teal
    muted: '#6B778C',
    border: '#DFE1E6',
    error: '#FF5630',
    success: '#36B37E',
  },
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    xxl: '48px',
  },
  fonts: {
    body: '"Inter", "Noto Sans JP", sans-serif',
    heading: '"Inter", "Noto Sans JP", sans-serif',
    mono: '"Fira Code", monospace',
  },
  breakpoints: {
    mobile: '576px',
    tablet: '768px',
    desktop: '992px',
    wide: '1200px',
  },
} as const;

export type Theme = typeof theme;
