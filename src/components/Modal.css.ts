import { style } from '@vanilla-extract/css';
/* eslint-disable */
import { vars } from '../styles/theme.css';

const borderRadius = '8px';

export const dialogClass = style({
  '::backdrop': {
    opacity: 0.5,
    backgroundColor: vars.theme.background.primary,
  },
  backgroundColor: vars.theme.background.primary,
  border: '2px solid',
  borderColor: vars.theme.text.normal,
  borderRadius,
  color: vars.theme.text.normal,
  display: 'flex',
  flexDirection: 'column',
  fontSize: '85%',
  height: '300px',
  left: '50%',
  margin: 0,
  maxHeight: '80vh',
  maxWidth: '80vw',
  padding: 0,
  position: 'fixed',
  top: '50%',
  transform: 'translate(-50%, -50%)',
  width: '500px',
  zIndex: 1,
});

export const headerClass = style({
  borderTopLeftRadius: borderRadius,
  borderTopRightRadius: borderRadius,
  backgroundColor: vars.theme.background.secondary,
  display: 'flex',
  padding: '0.5rem',
});

export const titleClass = style({
  flexGrow: 1,
  margin: 0,
});

export const contentClass = style({
  flexGrow: 1,
  height: '100%',
  overflowY: 'scroll',
  padding: '0.5rem 1rem',
});

export const footerClass = style({
  display: 'flex',
  alignItems: 'center',
  padding: '0.75rem',
});

export const closeButtonClass = style({
  backgroundColor: vars.theme.primary,
  border: 'none',
  borderRadius: '3px',
  color: vars.theme.background.primary,
  padding: '0.2rem 0.3rem',
  margin: 'auto',
});
