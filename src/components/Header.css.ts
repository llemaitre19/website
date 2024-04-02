import { style } from '@vanilla-extract/css';
import { vars } from '../styles/theme.css';
import { MAX_WIDTH, OUTLINE_PADDING } from '../constants';

export const headerContainerClass = style({
  backgroundColor: vars.theme.background.secondary,
});

export const headerClass = style({
  display: 'flex',
  flexWrap: 'wrap',
  fontFamily: vars.fonts.header,
  gap: vars.spaces.column,
  margin: '0 auto',
  maxWidth: MAX_WIDTH,
  paddingBottom: '1rem',
  paddingLeft: OUTLINE_PADDING,
  paddingRight: OUTLINE_PADDING,
  paddingTop: OUTLINE_PADDING,
});

export const leftHeaderClass = style({
  flexGrow: 1,
});

export const rightHeaderClass = style({
  alignItems: 'end',
  display: 'flex',
  flexDirection: 'column',
  flexShrink: 0,
  justifyContent: 'space-between',
});

export const companyClass = style({
  marginTop: 0,
  marginBottom: 0,
});

export const companyNameClass = style({
  color: vars.theme.secondary,
});

export const nameClass = style({
  marginTop: '0.5rem',
  marginBottom: 0,
});

export const jobClass = style({
  marginTop: '0.1rem',
  marginBottom: 0,
  fontWeight: 'normal',
});

export const paramsClass = style({
  alignItems: 'start',
  display: 'flex',
  flexDirection: 'column',
  gap: 4,
});
