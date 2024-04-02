import { style } from '@vanilla-extract/css';
import { vars } from '../styles/theme.css';
import { MAX_WIDTH, OUTLINE_PADDING } from '../constants';

export const linkClass = style({
  border: '2px solid',
  borderRadius: '0.7rem',
  color: 'inherit',
  fontSize: 'small',
  minWidth: '3.5rem',
  padding: '0.2rem 0.5rem',
  textAlign: 'center',
  textDecoration: 'none',
  textTransform: 'uppercase',
  ':hover': {
    color: 'inherit',
    fontWeight: 'bold',
  },
});

export const activeLinkClass = style({
  backgroundColor: vars.theme.primary,
  borderColor: vars.theme.primary,
  color: vars.theme.background.primary,
  ':hover': {
    color: vars.theme.background.primary,
    cursor: 'default',
    filter: 'none',
    fontWeight: 'normal',
  },
});

export const navigationClass = style({
  color: vars.theme.primary,
  display: 'flex',
  flexWrap: 'wrap',
  gap: '0.5rem 0.75rem',
  margin: '0 auto',
  maxWidth: MAX_WIDTH,
  paddingLeft: OUTLINE_PADDING,
  paddingRight: OUTLINE_PADDING,
  paddingTop: '2rem',
});
