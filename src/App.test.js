import React from 'react';
import { render, screen} from './render';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/testing library & jest/i);
  expect(linkElement).toBeInTheDocument();
});
