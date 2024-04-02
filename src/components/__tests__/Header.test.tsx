import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
// import '@testing-library/jest-dom';
import Header from '../Header';
import { DARK_THEME } from '../../constants';

it('should render without error', () => {
  render(<Header theme={DARK_THEME} onThemeChange={() => {}} />);
});

// FIXME: styles do not seem to be properly loaded in tests
// it('should set bg color to the light one', async () => {
//   const user = userEvent.setup();
//   render(<Header theme={DARK_THEME} onThemeChange={() => {}} />);
//   await user.click(screen.getByRole('option', { name: 'header:theme.light' }));
//   const header = await screen.findByRole('banner');
//   expect(header).toHaveStyle('background-color: rgb(248, 233, 221)');
// });
