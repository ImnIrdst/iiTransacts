import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const iiTransactTitleElement = screen.getByText(/iiTransact/i);
  expect(iiTransactTitleElement).toBeInTheDocument();
});
