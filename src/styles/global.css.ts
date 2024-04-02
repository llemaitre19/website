import { globalStyle } from '@vanilla-extract/css';
import { vars } from './theme.css';

globalStyle('html, body, #___gatsby, #gatsby-focus-wrapper', {
  height: '100%',
  margin: 0,
  padding: 0,
});

globalStyle('#main-container', {
  backgroundColor: vars.theme.background.primary,
  color: vars.theme.text.normal,
  display: 'flex',
  flexDirection: 'column',
  fontFamily: vars.fonts.body,
  minHeight: '100%',
});

globalStyle('a', {
  color: 'inherit',
  textDecoration: 'none',
});

globalStyle('a:hover', {
  color: vars.theme.primary,
});

globalStyle('button', {
  cursor: 'pointer',
  padding: 0,
});

globalStyle('a:hover, button:hover', {
  filter: `brightness(${vars.theme.link.hoverBrightness})`,
});

globalStyle('ul', {
  margin: 0,
  paddingLeft: '1.5rem',
});

globalStyle('li', {
  marginTop: vars.spaces.paragraph,
});

globalStyle('li:first-child', {
  margin: 0,
});

globalStyle('p', {
  marginTop: 0,
  marginBottom: '0.5rem',
});
