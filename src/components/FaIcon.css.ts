import { style } from '@vanilla-extract/css';
import { vars } from '../styles/theme.css';

export const faIconClass = style({
  color: vars.theme.secondary,
});

export const iconClass = style({
  marginRight: vars.spaces.iconLabel,
});
