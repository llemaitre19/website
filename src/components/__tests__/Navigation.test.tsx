import React from 'react';
import { render, screen } from '@testing-library/react';
import Navigation from '../Navigation';
import { DARK_THEME } from '../../constants';

it('should render without error', () => {
  render(<Navigation currentTheme={DARK_THEME} />);
});

it('should be home at /', () => {
  render(<Navigation currentTheme={DARK_THEME} />);
  const link = screen.getByRole('link', { name: 'home' });
  expect(link).toHaveAttribute('href', '/');
});

it('should be web at /web', () => {
  render(<Navigation currentTheme={DARK_THEME} />);
  const link = screen.getByRole('link', { name: 'web' });
  expect(link).toHaveAttribute('href', '/web');
});

it('should be cpp at /cpp', () => {
  render(<Navigation currentTheme={DARK_THEME} />);
  const link = screen.getByRole('link', { name: 'cpp' });
  expect(link).toHaveAttribute('href', '/cpp');
});

it('should be projects at /projects', () => {
  render(<Navigation currentTheme={DARK_THEME} />);
  const link = screen.getByRole('link', { name: 'projects' });
  expect(link).toHaveAttribute('href', '/projects');
});
