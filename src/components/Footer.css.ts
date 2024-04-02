import { style } from '@vanilla-extract/css';
import { vars } from '../styles/theme.css';
import { MAX_WIDTH, OUTLINE_PADDING } from '../constants';

export const footerContainerClass = style({
  backgroundColor: vars.theme.background.secondary,
});

const widthThreshold = 600;

export const footerClass = style({
  '@media': {
    [`screen and (min-width: ${widthThreshold}px)`]: {
      display: 'flex',
      gap: vars.spaces.column,
    },
  },
  fontFamily: vars.fonts.footer,
  fontSize: 'small',
  margin: '0 auto',
  maxWidth: MAX_WIDTH,
  paddingBottom: OUTLINE_PADDING,
  paddingLeft: OUTLINE_PADDING,
  paddingRight: OUTLINE_PADDING,
  paddingTop: '1rem',
});

export const leftFooterClass = style({
  display: 'flex',
  flexDirection: 'column',
  flexGrow: 0,
  flexShrink: 0,
  gap: 4,
});

export const rightFooterClass = style({
  display: 'flex',
  flexDirection: 'column',
  flexGrow: 1,
  gap: 4,
  '@media': {
    [`screen and (min-width: ${widthThreshold}px)`]: {
      alignItems: 'end',
    },
    [`screen and (max-width: ${widthThreshold - 1}px)`]: {
      marginTop: '1.5rem',
    },
  },
});

export const linksClass = style({
  display: 'flex',
  gap: 10,
});

export const buttonClass = style({
  backgroundColor: 'inherit',
  border: 'none',
  color: 'inherit',
});

export const alignDotClass = style({
  '::after': {
    content: '.',
    visibility: 'hidden',
  },
});

export const cookiesClass = style({
  '@media': {
    [`screen and (min-width: ${widthThreshold}px)`]: {
      textAlign: 'right',
    },
  },
  textWrap: 'balance',
});
