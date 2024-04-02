import { style } from '@vanilla-extract/css';

export const noticeSectionClass = style({
  marginTop: '0.5rem',
});

export const noticeItemClass = style({
  marginTop: '0.2rem',
});

export const noticeItemTitleClass = style({
  fontWeight: 'bold',
});

export const noticeItemContentClass = style({
  '@media': {
    'screen and (max-width: 450px)': {
      display: 'block',
    },
  },
  whiteSpace: 'nowrap',
});
