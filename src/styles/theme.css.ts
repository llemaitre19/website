import { createGlobalTheme, createThemeContract, createTheme } from '@vanilla-extract/css';

const root = createGlobalTheme('#main-container', {
  fonts: {
    body: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
    footer: 'lucida, monospace',
    header: 'lucida, monospace',
  },
  spaces: {
    column: '1rem',
    iconLabel: '0.5rem',
    paragraph: '0.5rem',
  },
});

const theme = createThemeContract({
  primary: '',
  secondary: '',
  background: {
    primary: '',
    secondary: '',
  },
  text: {
    normal: '',
  },
  link: {
    hoverBrightness: '',
  },
});

export const lightTheme = createTheme(theme, {
  primary: '#314349',
  secondary: '#dd7f03',
  background: {
    primary: '#fff6eb',
    secondary: '#f8e9dd',
  },
  text: {
    normal: '#031927',
  },
  link: {
    hoverBrightness: '75%',
  },
});

export const darkTheme = createTheme(theme, {
  primary: '#41aad6',
  secondary: '#fca535',
  background: {
    primary: '#212328',
    secondary: '#195873',
  },
  text: {
    normal: '#e8e7e3',
  },
  link: {
    hoverBrightness: '120%',
  },
});

export const vars = { ...root, theme };
