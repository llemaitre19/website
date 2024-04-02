import { style } from '@vanilla-extract/css';
import { vars } from '../styles/theme.css';

export const spanClass = style({
  marginRight: vars.spaces.iconLabel,
});

export const selectClass = style({
  WebkitAppearance: 'none',
  MozAppearance: 'none',
  appearance: 'none',
  backgroundColor: vars.theme.background.secondary,
  border: 'none',
  color: 'inherit',
  cursor: 'pointer',
  fontFamily: 'inherit',
  fontSize: 'small',
});

export const optionClass = style({
  backgroundColor: vars.theme.background.primary,
});
