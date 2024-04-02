import { style } from '@vanilla-extract/css';
import { MAX_WIDTH, OUTLINE_PADDING } from '../constants';

export const contentClass = style({
  padding: '30px auto',
  margin: '0 auto',
  maxWidth: MAX_WIDTH,
  paddingBottom: '2rem',
  paddingLeft: OUTLINE_PADDING,
  paddingRight: OUTLINE_PADDING,
  paddingTop: '2rem',
});
