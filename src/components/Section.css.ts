import { style } from '@vanilla-extract/css';
import { vars } from '../styles/theme.css';

export const containerClass = style({
  marginTop: '1.5rem',
});

export const sectionTitleClass = style({
  color: vars.theme.secondary,
  fontWeight: 'bold',
  paddingBottom: vars.spaces.paragraph,
});

export const sectionChildrenClass = style({
  paddingLeft: '0.5rem',
});

export const iconClass = style({
  marginRight: '0.5rem',
});
