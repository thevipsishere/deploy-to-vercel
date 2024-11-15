import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../App'; // Update path based on your project

test('renders the app component', () => {
  render(<App />);
  expect(screen.getByText(/hello world/i)).toBeInTheDocument();
});
